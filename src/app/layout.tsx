import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future Store",
  description: "Fake Store to learn next.js version 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
