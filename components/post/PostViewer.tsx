import React from "react";
import { PostResponse } from "../../utils/api/post";
import Post from "./Post";

export interface PostViewerProps {
  posts: PostResponse[];
  loading: boolean;
}

export default function PostViewer(props: PostViewerProps) {
  if (props.loading) {
    return <DummyPostViewer />;
  }
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.postId} className="m-1 sm:m-5">
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

function DummyPostViewer() {
  return <></>;
}
