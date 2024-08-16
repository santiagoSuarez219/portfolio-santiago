import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago's Portfolio",
  description:
    "Junior Web Developer from Colombia. 1 year of experience developing web applications using React, NextJS, TailwindCSS, MongoDB, PostgresSQL, Node.js, and Express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
