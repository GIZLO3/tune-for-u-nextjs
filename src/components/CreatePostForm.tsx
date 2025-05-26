"use client";

import Image from "next/image";
import { useState } from "react";
import { useActionState } from "react";
import { createPost } from "@/app/actions";

export default function PostCreateForm() {
  const maxPostLength = 250;
  const [postContent, setPostContent] = useState("");

  const initialState = { success: false, error: null as string | null };
  const [formState, formAction, isPending] = useActionState(
    createPost,
    initialState
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxPostLength) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
      setPostContent(e.target.value);
    }
  };

  return (
    <div className="flex gap-5 p-5">
      <Image
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="profile_picture"
        width={45}
        height={45}
        className="rounded-full h-min"
      />
      <form action={formAction} className="w-full py-1">
        <textarea
          name="post_content"
          id="post_content"
          onChange={handleChange}
          className="outline-none w-full max-h-96 overflow-hidden
               rounded resize-none focus:bg-neutral-900/30 p-1 text-lg"
          placeholder="Dodaj wpis..."
          rows={1}
          minLength={1}
          value={postContent}
          maxLength={maxPostLength}
        />
        {formState.error && (
          <p className="text-red-500 text-sm mt-1">{formState.error}</p>
        )}
        <div className="flex border-t py-1 items-center justify-between">
          <p>
            {postContent.length} / {maxPostLength}
          </p>
          <button
            type="submit"
            disabled={isPending}
            className={`px-3 py-1 rounded-full font-medium ${
              isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isPending ? "Publikowanie..." : "Opublikuj wpis"}
          </button>
        </div>
      </form>
    </div>
  );
}
