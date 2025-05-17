"use client";

import Image from "next/image";
import Form from "next/form";
import { useState } from "react";

export default function PostCreateForm() {
  const [postText, setPostText] = useState("");
  const maxPostLength = 250;

  async function formAction(formData: FormData) {}

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxPostLength) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
      setPostText(e.target.value);
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
      <Form action={formAction} className="w-full py-1">
        <textarea
          name="post_content"
          id="post_content"
          onChange={handleChange}
          className="outline-none w-full max-h-96 overflow-hidden
               rounded resize-none focus:bg-neutral-900/30 p-1 text-lg"
          placeholder="Dodaj wpis..."
          rows={1}
          value={postText}
          minLength={1}
          maxLength={maxPostLength}
        />
        <div className="flex border-t py-1 items-center justify-between">
          <div className="flex gap-5 items-center">
            <p>
              {postText.length} / {maxPostLength}
            </p>
            <button
              type="submit"
              disabled={postText.length === 0}
              className={`px-3 py-1 rounded-full font-medium ${
                postText.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              Opublikuj wpis
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
