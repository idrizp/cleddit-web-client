import { useRouter } from "next/dist/client/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import ListPostViewer from "../../components/post/ListPostViewer";
import SubcledditViewer from "../../components/subcleddit/SubcledditViewer";

export default function SubcledditPostList() {
  const { name } = useRouter().query;
  const [subcledditName, setSubcledditName] = useState<string | undefined>(
    undefined
  );
  useEffect(() => {
    if (name) {
      setSubcledditName(name as string);
    }
  }, [name]);
  return (
    <MainContainer className="flex flex-col">
      {subcledditName && (
        <SubcledditViewer subcleddit={name as string} page={1} />
      )}
    </MainContainer>
  );
}
