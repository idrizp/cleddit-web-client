import { useRouter } from "next/dist/client/router";
import React from "react";
import { useEffect } from "react";

export default function LogOut() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    router.push("/");
  }, []);
  return <div>Logging out...</div>;
}
