import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    system: "Yash's Portfolio",
    status: "operational",
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
}
