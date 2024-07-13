import React from "react";
import Link from "next/link";

function NavLinks({ children, href }) {
  return (
    <Link
      className="flex flex-row gap-1 rounded-md p-2 hover:bg-green-100"
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLinks;
