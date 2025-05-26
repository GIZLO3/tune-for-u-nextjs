"use server";

import prisma from "./_lib/prisma";

export async function createPost(
  prevState: { success: boolean; error: string | null },
  formData: FormData
) {
  const content = formData.get("post_content")?.toString();

  if (!content || content.trim().length === 0) {
    return { success: false, error: "Wpis nie może być pusty" };
  }

  if (content.length > 250) {
    return { success: false, error: "Wpis jest za długi" };
  }

  try {
    await prisma.post.create({
      data: {
        content,
      },
    });
    return { success: true, error: null };
  } catch (e) {
    console.error("Failed to create post:", e);
    return { success: false, error: "Nie udało się utworzyć wpisu." };
  }
}

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  } catch (e) {
    console.error("Failed to fetch posts:", e);
    return [];
  }
}
