import { useRouter } from "next/dist/client/router";
import React from "react";
import { useState } from "react";
import { PrimaryButton } from "../components/Button";
import { login, setTokens } from "../utils/api/authentication";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  function authenticate() {
    login(username, password)
      .then((result) => {
        setTokens(result.data);
        router.push("/");
      })
      .catch((err) => {
        setErrorMessage("Invalid username or password.");
      });
  }

  return (
    <main className="bg-gray-900 min-h-screen h-full flex flex-col items-center content-center justify-center">
      <div className="bg-gray-800 p-8 sm:p-12 rounded-md space-y-6 flex flex-col font-main">
        <h1 className="text-3xl text-center text-white font-main font-bold underline p-5">
          CLEDDIT
        </h1>
        <LoginInput
          type="text"
          label="Username"
          placeholderText="Username"
          onChange={setUsername}
        />
        <LoginInput
          type="password"
          label="Password"
          placeholderText="Password"
          onChange={setPassword}
        />
        <PrimaryButton text="Log In" onClick={authenticate} />
        {errorMessage !== undefined && (
          <p className="rounded-md text-red-400 font-medium text-lg text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </main>
  );
}

export interface LoginInputProps {
  label: string;
  placeholderText: string;
  type: string;
  onChange: (value: string) => void;
}

export function LoginInput(props: LoginInputProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-white font-main text-2xl">{props.label}: </h1>
      <input
        type={props.type}
        placeholder={props.placeholderText}
        className="text-xl p-2 rounded-sm shadow-lg"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
