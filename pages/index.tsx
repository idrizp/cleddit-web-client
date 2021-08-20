import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import PostViewer from "../components/post/PostViewer";
import { getPostsInAll, PostResponse } from "../utils/api/post";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<PostResponse[] | undefined>(undefined);

  useEffect(() => {
    getPostsInAll(1)
      .then((result) => {
        console.log(result);
        setPosts(result.data.posts);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Cleddit</title>
      </Head>
      <main className="font-main bg-gray-900 min-h-screen h-full">
        <Header />
        <PostViewer posts={posts || []} loading={posts === undefined} />
      </main>
    </div>
  );
};

export default Home;
