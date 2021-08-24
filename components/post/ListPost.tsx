import Link from "next/link";
import React from "react";
import { hasAuthenticationToken } from "../../utils/api/authentication";
import { PostResponse } from "../../utils/api/post";
import VoteBar from "./VoteBar";

export interface PostProps {
  post: PostResponse;
}

export default function ListPost(props: PostProps) {
  return (
    <div className="flex flex-col p-3 bg-gray-800 rounded-md shadow-lg cursor-pointer">
      <Link href={`/post/${props.post.postId}`}>
        <a>
          <p className="text-gray-400 text-lg">{props.post.posterName}</p>
          <p className="text-gray-500 text-xs">
            cl/{props.post.subcledditName}
          </p>
          <div>
            <h1 className="text-xl text-white">{props.post.title}</h1>
            <p className="text-gray-200 text-lg">{props.post.content}</p>
          </div>
        </a>
      </Link>
      {hasAuthenticationToken() && <VoteBar post={props.post} />}
    </div>
  );
}
