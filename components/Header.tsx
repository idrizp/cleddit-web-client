import React, { useState } from "react";
import { hasAuthenticationToken } from "../utils/api/authentication";
import {
  NavItemContainer,
  NavLink,
  NavLinkButton,
  NavLinks,
} from "./Navigation";

export default function Header() {
  return (
    <div className="p-5 items-center sm:items-start font-main text-white text-xl flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:p-10 sm:pb-5">
      <h1 className="pt-10 pb-3 sm:p-0 sm:block font-bold text-3xl">Cleddit</h1>
      {typeof window !== "undefined" && <Navigation />}
    </div>
  );
}

export function Navigation() {
  return (
    <NavLinks>
      <NavLink href="/" text="Home" />
      {!hasAuthenticationToken() && (
        <>
          <NavLinkButton href="/register" text="Sign Up" />
          <NavLinkButton href="/login" text="Log In" />
        </>
      )}
      {hasAuthenticationToken() && <NavLink href="/logout" text="Log Out" />}
    </NavLinks>
  );
}
