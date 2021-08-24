import React from "react";
import { PostResponse } from "../../utils/api/post";
import ListPost from "./ListPost";

export interface PostViewerProps {
  posts: PostResponse[];
  loading: boolean;
}

export default function ListPostViewer(props: PostViewerProps) {
  if (props.loading) {
    return <DummyPostViewer />;
  }

  if (props.posts.length === 0) {
    return (
      <div className="p-5 bg-gray-800 shadow-xl flex-1 m-5 rounded-md flex items-center text-center justify-center">
        <p className="text-white font-bold font-main">
          Whoops! Looks like there&apos;s no posts on this subcleddit.
        </p>
      </div>
    );
  }
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.postId} className="m-1 sm:m-5">
          <ListPost post={post} />
        </li>
      ))}
    </ul>
  );
}

function DummyPostViewer() {
  // TODO: Some pretty dummy stuff
  return <></>;
}
