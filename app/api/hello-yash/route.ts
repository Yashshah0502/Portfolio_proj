import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello! I'm Yash, an AI Engineer building the future.",
    status: "online",
    role: "AI Engineer",
    skills: ["Python", "React", "LLMs", "RAG"],
    contact: "hello@yashshah.dev"
  });
}
