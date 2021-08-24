import React from "react";
import { hasAuthenticationToken } from "../../utils/api/authentication";
import { PostResponse } from "../../utils/api/post";
import VoteBar from "./VoteBar";

export interface PostProps {
  post: PostResponse;
}

export default function Post({ post }: PostProps) {
  return (
    <div className="flex flex-col p-2 font-main">
      <p className="text-gray-500 font-light italic">{post.posterName}</p>
      <p className="text-gray-400 text-3xl font-bold">{post.title}</p>
      <p className="text-gray-300 text-lg">{post.content}</p>
      {hasAuthenticationToken() && <VoteBar post={post} />}
    </div>
  );
}
