import React from "react";
import Link from "next/link";
export default function NavLink({ children, path }) {
  return (
    <Link href={path}>
      <a className="text-gray-300 font-medium hover:underline hover:text-gray-200 text-sm px-2 uppercase">
        {children}
      </a>
    </Link>
  );
}
