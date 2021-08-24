import React from "react";

export interface ButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
}

export function PrimaryButton(props: ButtonProps) {
  return (
    <button
      className={`bg-red-500 text-white p-2 rounded-sm shadow-md ${
        props.className || ""
      }`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
