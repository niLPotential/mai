"use client";

import React from "react";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const barContent: { href: string; text: string }[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/compose",
    text: "Make Music",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/shop",
    text: "Market",
  },
  {
    href: "/account",
    text: "My Page",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export function NavBar() {
  return (
    <div className="my-5 flex h-5 justify-center gap-5">
      <Separator orientation="vertical" />
      {barContent.map(({ href, text }) => (
        <>
          <Link href={href}>{text}</Link>
          <Separator orientation="vertical" />
        </>
      ))}
    </div>
  );
}
