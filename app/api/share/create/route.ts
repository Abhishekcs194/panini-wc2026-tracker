import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import clientPromise from "@/lib/mongodb";
import { verifyToken, getTokenFromRequest } from "@/lib/auth";

export async function POST(req: Request) {
  const token = getTokenFromRequest(req);
  const payload = token ? await verifyToken(token) : null;
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const client = await clientPromise;
  const users = client.db("panini").collection("users");

  const user = await users.findOne({ username: payload.username });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  let shareToken: string = user.shareToken;
  if (!shareToken) {
    shareToken = randomBytes(8).toString("hex");
    await users.updateOne({ username: payload.username }, { $set: { shareToken } });
  }

  return NextResponse.json({ shareToken });
}
