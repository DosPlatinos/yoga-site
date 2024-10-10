"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import omsymbol from "../public/omsymbol.jpeg";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const pathname = usePathname();

  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <header className="bg-violet-400 p-0">
        <nav className="flex justify-between items-baseline">
          <div>
            <Image
              src={omsymbol}
              alt="omsymbol"
              width="75"
              height="75"
              className="rounded-full aspect-square object-cover"
            />
            <span className="text-purple-800 text-lg font-bold">
              Inner Peace Outer Strength
            </span>
          </div>
          <div className="justify-between">
            <ul className="flex-wrap flex gap-6">
              <Link
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                <a className="hover:border-b-purple-800 text-xl ">Home</a>
              </Link>
              <Link
                className={`link ${pathname === "/bio" ? "active" : ""}`}
                href="/bio"
              >
                <a className="hover:border-b-purple-800 text-xl">Bio</a>
              </Link>
              <Link
                className={`link ${pathname === "/calendar" ? "active" : ""}`}
                href="/calendar"
              >
                <a className="hover:border-b-purple-800 text-xl">Calendar</a>
              </Link>
              <Link
                className={`link ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                <a className="hover:border-b-purple-800 text-xl">Contact Us</a>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
