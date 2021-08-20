import { AxiosError } from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { PrimaryButton } from "../components/Button";
import { register, setTokens } from "../utils/api/authentication";
import { LoginInput } from "./login";

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  function signUp() {
    register(username, email, password)
      .then((result) => {
        setTokens(result.data);
        router.push("/");
      })
      .catch((err: AxiosError) => {
        switch (err.response?.status) {
          case 409:
            setErrorMessage("A user by that username already exists.");
            break;
          default:
            setErrorMessage("An internal error has occurred.");
            break;
        }
        console.error(err);
      });
  }

  return (
    <main className="bg-gray-900 min-h-screen h-full flex flex-col items-center content-center justify-center">
      <div className="bg-gray-800 p-8 sm:p-12 rounded-md space-y-6 flex flex-col font-main">
        <h1 className="text-3xl text-center text-white font-main font-bold underline p-5">
          CLEDDIT - Register
        </h1>
        <LoginInput
          type="text"
          label="Username"
          placeholderText="Username"
          onChange={setUsername}
        />
        <LoginInput
          type="email"
          label="E-Mail"
          placeholderText="email@email.com"
          onChange={setEmail}
        />
        <LoginInput
          type="password"
          label="Password"
          placeholderText="Password"
          onChange={setPassword}
        />
        <PrimaryButton text="Sign Up" onClick={signUp} />
        {errorMessage !== undefined && (
          <p className="rounded-md text-red-400 font-medium text-lg text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </main>
  );
}
