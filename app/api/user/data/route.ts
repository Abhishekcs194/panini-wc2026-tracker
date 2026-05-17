import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { verifyToken, getTokenFromRequest } from "@/lib/auth";

export async function GET(req: Request) {
  const token = getTokenFromRequest(req);
  const payload = token ? await verifyToken(token) : null;
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const client = await clientPromise;
  const user = await client.db("panini").collection("users").findOne({ username: payload.username });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ missingList: user.missingList, duplicatesList: user.duplicatesList });
}

export async function POST(req: Request) {
  const token = getTokenFromRequest(req);
  const payload = token ? await verifyToken(token) : null;
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { missingList, duplicatesList } = await req.json();

  const client = await clientPromise;
  await client.db("panini").collection("users").updateOne(
    { username: payload.username },
    { $set: { missingList: missingList ?? "", duplicatesList: duplicatesList ?? "", updatedAt: new Date() } }
  );

  return NextResponse.json({ ok: true });
}
