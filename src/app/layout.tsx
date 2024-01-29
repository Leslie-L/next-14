import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const roboto = Roboto({ 
  weight:["300","700","900"],
  subsets: ["latin"] 
});

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
     
      <body className={roboto.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
