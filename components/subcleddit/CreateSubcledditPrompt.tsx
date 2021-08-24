import { useRouter } from "next/dist/client/router";
import React from "react";
import { hasAuthenticationToken } from "../../utils/api/authentication";
import { createSubcleddit } from "../../utils/api/subcleddit";
import CledditLink from "../Link";

export interface CreateSubcledditPromptProps {
  name: string;
}

export default function CreateSubcledditPrompt(
  props: CreateSubcledditPromptProps
) {
  const router = useRouter();
  function handleCreate() {
    createSubcleddit(props.name, "A subcleddit.")
      .then((result) => {
        if (result.status === 200) {
          console.log(props.name);
          router.push(`/cl/${props.name}`);
          return;
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <div className="bg-red-500 p-5 m-3 shadow-md rounded-md sm:m-5">
      <h1 className="text-white font-main font-bold text-center">
        That subcleddit does not exist! You can{" "}
        {hasAuthenticationToken() ? (
          <p
            className="cursor-pointer text-white italic font-medium underline"
            onClick={handleCreate}
          >
            create it though.
          </p>
        ) : (
          <CledditLink href="/login" className="text-white italic font-medium">
            create it though.
          </CledditLink>
        )}
      </h1>
    </div>
  );
}
