import React from "react";
import { PostResponse, vote } from "../../utils/api/post";
import { BiUpvote as Upvote, BiDownvote as Downvote } from "react-icons/bi";
import { useState } from "react";

export interface VoteBarProps {
  post: PostResponse;
}

export default function VoteBar(props: VoteBarProps) {
  const [positive, setPositive] = useState(props.post.vote);

  function castVote(result: boolean) {
    if (positive === result) {
      return;
    }
    vote(props.post.postId, result)
      .then((result) => {
        setPositive(result.data.positive);
      })
      .catch((err) => {
        setPositive(undefined);
      });
  }

  return (
    <div className="flex flex-row space-x-5">
      <button
        onClick={() => castVote(true)}
        className={
          positive !== undefined && positive === true
            ? "text-yellow-600"
            : "text-gray-700"
        }
      >
        <Upvote size="30" />
      </button>
      <button
        onClick={() => castVote(false)}
        className={
          positive !== undefined && positive === false
            ? "text-red-600"
            : "text-gray-700"
        }
      >
        <Downvote size="30" />
      </button>
    </div>
  );
}
