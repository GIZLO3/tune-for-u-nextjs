// app/api/posts/route.ts

import prisma from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}
