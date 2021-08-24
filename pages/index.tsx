import type { NextPage } from "next";
import Head from "next/head";
import MainContainer from "../components/MainContainer";
import SubcledditViewer from "../components/subcleddit/SubcledditViewer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cleddit</title>
      </Head>
      <MainContainer>
        <SubcledditViewer subcleddit="all" page={1} />
      </MainContainer>
    </div>
  );
};

export default Home;
