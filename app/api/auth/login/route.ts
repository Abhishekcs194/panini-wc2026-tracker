import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  const client = await clientPromise;
  const users = client.db("panini").collection("users");

  const user = await users.findOne({ username: username.toLowerCase() });
  if (!user) {
    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid username or password" }, { status: 401 });
  }

  const token = await signToken({ userId: user._id.toString(), username: user.username });
  return NextResponse.json({ token, username: user.username });
}
