"use client";

import React from "react";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function NavBar() {
  return (
    <div className="my-5 flex h-5 justify-center gap-5">
      <Separator orientation="vertical" />
      <Link href="/">Home</Link>
      <Separator orientation="vertical" />
      <Link href="/compose">Make Music</Link>
      <Separator orientation="vertical" />
      <Link href="/about">About</Link>
      <Separator orientation="vertical" />
      <Link href="/shop">Market</Link>
      <Separator orientation="vertical" />
      <Link href="/account">My Page</Link>
      <Separator orientation="vertical" />
      <Link href="/contact">Contact</Link>
      <Separator orientation="vertical" />
    </div>
  );
}
