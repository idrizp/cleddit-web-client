import { useRouter } from "next/dist/client/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header, { Navigation } from "../../components/Header";
import Post from "../../components/post/Post";
import VoteBar from "../../components/post/VoteBar";
import { hasAuthenticationToken } from "../../utils/api/authentication";
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
      <Header />
      <div>
        {error && (
          <h1 className="text-center text-white text-3xl">Post not found.</h1>
        )}
        {post && <Post post={post} />}
      </div>
    </div>
  );
}
