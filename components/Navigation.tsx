import React, { PropsWithChildren } from "react";
import Link from "next/link";

export function NavLinks({ children }: PropsWithChildren<{}>) {
  return <ul className="flex flex-row items-center space-x-5">{children}</ul>;
}

export interface NavItemContainerProps extends PropsWithChildren<{}> {
  className?: string;
}

export function NavItemContainer({
  children,
  className,
}: NavItemContainerProps) {
  return <li className={className || ""}>{children}</li>;
}

export interface NavLinkProps {
  text: string;
  href: string;
}

export interface NavButtonProps {
  text: string;
  href: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <NavItemContainer>
      <Link href={props.href}>
        <a className="text-lg">{props.text}</a>
      </Link>
    </NavItemContainer>
  );
}

export function NavLinkButton(props: NavButtonProps) {
  return (
    <NavItemContainer>
      <Link href={props.href}>
        <a className="bg-red-500 p-3 w-max rounded-md shadow-lg text-lg">
          {props.text}
        </a>
      </Link>
    </NavItemContainer>
  );
}
