import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Background from "/public/background.png";

import { NavBar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "M:AI Music",
  description: "Your AI Composer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative left-1/2 flex min-h-full max-w-screen-md translate-x-[-50%] flex-col items-center justify-center">
          <NavBar />
          <div className="flex flex-1 flex-col items-center justify-center">
            {children}
          </div>
          <Image
            src={Background}
            alt="background image"
            className="absolute -z-20"
          />
        </div>
      </body>
    </html>
  );
}
