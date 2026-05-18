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

  // missingList is the legacy comma-separated string field; missing is the current array field
  let missing = user.missing ?? [];
  if (missing.length === 0 && user.missingList) {
    missing = user.missingList.split(",").map((id: string) => id.trim()).filter(Boolean);
  }

  return NextResponse.json({
    missing,
    duplicates: user.duplicates ?? [],
  });
}

export async function POST(req: Request) {
  const token = getTokenFromRequest(req);
  const payload = token ? await verifyToken(token) : null;
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { missing, duplicates } = await req.json();

  const client = await clientPromise;
  await client.db("panini").collection("users").updateOne(
    { username: payload.username },
    { $set: { missing: missing ?? [], duplicates: duplicates ?? [], updatedAt: new Date() } }
  );

  return NextResponse.json({ ok: true });
}
