import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const backendUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "").replace(/\/$/, "");

  return NextResponse.json({
    service: "namastebharat-api",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      home: "/api/home",
      businesses: "/api/businesses",
      businessById: "/api/businesses/:id",
      reels: "/api/reels",
      offers: "/api/offers",
      categories: "/api/categories",
      leads: "/api/leads",
      backendHealth: backendUrl ? `${backendUrl}/api/health` : null,
    },
    note: "Frontend business APIs are served here. Auth is handled directly by Supabase.",
  });
}
