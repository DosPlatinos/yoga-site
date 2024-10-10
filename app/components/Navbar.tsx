"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import omsymbol from "../public/omsymbol.jpeg";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <header className="bg-violet-400 p-0 caret-transparent no-outline">
        <nav className="flex justify-between items-baseline">
          <div>
            <Image
              src={omsymbol}
              alt="omsymbol"
              className="h-16 w-16 rounded-full aspect-square object-cover"
            />
            <span className="text-purple-800 text-lg font-bold">
              Inner Peace Outer Strength
            </span>
          </div>
          <div className="justify-between">
            <ul className="flex-wrap flex gap-6">
              <Link href="/">
                <li className="hover:text-purple-800 hover:underline text-xl">
                  Home
                </li>
              </Link>
              <Link href="/bio">
                <li className="hover:text-purple-800 hover:underline text-xl">
                  Bio
                </li>
              </Link>
              <Link href="/calendar">
                <li className="hover:text-purple-800 hover:underline text-xl">
                  Calendar
                </li>
              </Link>
              <Link href="/contact">
                <li className="hover:text-purple-800 hover:underline text-xl">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
