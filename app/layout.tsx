import React from "react";
import Navbar from "./components/Navbar";
import HomeImage from "./components/HomeImage";
import "./globals.css";
import "tailwindcss/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Navbar />
    </html>
  );
}
