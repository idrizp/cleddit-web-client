import React from "react";
import Header from "./Header";

export interface MainContainerProps extends React.PropsWithChildren<{}> {
  className?: string;
}

export default function MainContainer({
  children,
  className,
}: MainContainerProps) {
  return (
    <div
      className={`font-main bg-gray-900 min-h-screen h-full ${className || ""}`}
    >
      <Header />
      {children}
    </div>
  );
}
