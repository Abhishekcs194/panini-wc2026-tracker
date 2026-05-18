import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { verifyToken, getTokenFromRequest } from "@/lib/auth";

export async function GET(req: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  const client = await clientPromise;
  const users = client.db("panini").collection("users");

  const owner = await users.findOne({ shareToken: token });
  if (!owner) return NextResponse.json({ error: "Share link not found" }, { status: 404 });

  // Resolve owner's missing (with legacy fallback)
  let ownerMissing: string[] = owner.missing ?? [];
  if (ownerMissing.length === 0 && owner.missingList) {
    ownerMissing = owner.missingList.split(",").map((id: string) => id.trim()).filter(Boolean);
  }
  const ownerDupes: Array<{ id: string; count: number }> = owner.duplicates ?? [];

  // Check if viewer is authenticated and is a different user
  const jwt = getTokenFromRequest(req);
  const viewerPayload = jwt ? await verifyToken(jwt) : null;

  let viewerUsername: string | null = null;
  let ownerCanGive: Array<{ id: string; count: number }> = [];
  let viewerCanGive: Array<{ id: string; count: number }> = [];

  if (viewerPayload && viewerPayload.username !== owner.username) {
    viewerUsername = viewerPayload.username;
    const viewer = await users.findOne({ username: viewerPayload.username });

    if (viewer) {
      let viewerMissing: string[] = viewer.missing ?? [];
      if (viewerMissing.length === 0 && viewer.missingList) {
        viewerMissing = viewer.missingList.split(",").map((id: string) => id.trim()).filter(Boolean);
      }
      const viewerDupes: Array<{ id: string; count: number }> = viewer.duplicates ?? [];

      const viewerMissingSet = new Set(viewerMissing.map((id) => id.toLowerCase()));
      const ownerMissingSet  = new Set(ownerMissing.map((id) => id.toLowerCase()));

      ownerCanGive  = ownerDupes.filter((d) => viewerMissingSet.has(d.id.toLowerCase()));
      viewerCanGive = viewerDupes.filter((d) => ownerMissingSet.has(d.id.toLowerCase()));
    }
  }

  return NextResponse.json({
    owner: {
      username: owner.username,
      duplicatesCount: ownerDupes.length,
      missingCount: ownerMissing.length,
    },
    viewer: viewerUsername,
    ownerCanGive,
    viewerCanGive,
  });
}
