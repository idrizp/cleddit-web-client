import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { getPostsInSubcleddit, PostResponse } from "../../utils/api/post";
import CledditLink from "../Link";
import ListPostViewer from "../post/ListPostViewer";
import CreateSubcledditPrompt from "./CreateSubcledditPrompt";

export interface SubcledditViewerProps {
  page: number;
  subcleddit: string;
}

export default function SubcledditViewer({
  subcleddit,
  page,
}: SubcledditViewerProps) {
  const [posts, setPosts] = useState<PostResponse[] | undefined>(undefined);
  const [missingSubcleddit, setMissingSubcleddit] = useState(false);

  useEffect(() => {
    getPostsInSubcleddit(subcleddit, page)
      .then((result) => {
        setPosts(result.data.posts);
      })
      .catch((err: AxiosError) => {
        console.error(err);
        if (err.response?.status === 404) {
          setMissingSubcleddit(true);
        }
      });
  }, []);

  if (missingSubcleddit) {
    return (
        <CreateSubcledditPrompt name={subcleddit} />
    );
  }
  return <ListPostViewer posts={posts || []} loading={posts === undefined} />;
}
