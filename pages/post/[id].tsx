import { useRouter } from "next/dist/client/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPost, PostResponse } from "../../utils/api/post";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  const [error, setError] = useState(undefined);
  const [post, setPost] = useState<PostResponse | undefined>(undefined);

  useEffect(() => {
    if (!id) {
      return;
    }
    getPost(id as string)
      .then((result) => {
        setPost(result.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [id]);

  return (
    <div className="bg-gray-900 min-h-screen h-full">
      {error && (
        <h1 className="text-center text-white text-3xl">Post not found.</h1>
      )}
      {post && (
        <div className="flex flex-col p-3 font-main">
          <p className="text-gray-500 font-light italic">{post.posterName}</p>
          <p className="text-gray-400 text-3xl font-bold">{post.title}</p>
          <p className="text-gray-300 text-lg">{post.content}</p>
        </div>
      )}
    </div>
  );
}
