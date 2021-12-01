import React from "react";
import Masthead from "../elements/Masthead";
import Navbar from "../elements/Navbar";
export default function Header() {
  return (
    <header className="pb-10">
      <Masthead />
      <Navbar />
    </header>
  );
}
