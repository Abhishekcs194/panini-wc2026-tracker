import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }
  if (username.length < 3 || username.length > 20) {
    return NextResponse.json({ error: "Username must be 3–20 characters" }, { status: 400 });
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return NextResponse.json({ error: "Username: letters, numbers and _ only" }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }

  const client = await clientPromise;
  const users = client.db("panini").collection("users");

  const existing = await users.findOne({ username: username.toLowerCase() });
  if (existing) {
    return NextResponse.json({ error: "Username already taken" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const result = await users.insertOne({
    username: username.toLowerCase(),
    displayName: username,
    passwordHash,
    missingList: "",
    duplicatesList: "",
    createdAt: new Date(),
  });

  const token = await signToken({ userId: result.insertedId.toString(), username: username.toLowerCase() });
  return NextResponse.json({ token, username: username.toLowerCase() }, { status: 201 });
}
