import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import "./styles.css";
import "tailwindcss/tailwind.css";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${monsterrat.className} bg-gradient-to-l bg-violet-300`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
