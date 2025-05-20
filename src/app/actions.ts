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

  await prisma.post.create({
    data: {
      content,
    },
  });

  return { success: true, error: null };
}
