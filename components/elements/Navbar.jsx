import React from "react";
import NavLink from "../atoms/NavLink";
export default function Navbar() {
  return (
    <nav className=" max-w-container mx-auto flex justify-center">
      <NavLink path="/about">About</NavLink>
      <NavLink path="/bounties">Bounties</NavLink>
      <NavLink path="/about">Join Us</NavLink>
    </nav>
  );
}
