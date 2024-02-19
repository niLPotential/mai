import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Background from "/public/background.png";

import { NavBar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-full max-w-screen-md flex-col items-center justify-center">
          <NavBar />
          <div className="flex flex-1 flex-col items-center justify-center">
            {children}
          </div>
          <Image src={Background} alt="" className="absolute -z-20" />
        </div>
      </body>
    </html>
  );
}
