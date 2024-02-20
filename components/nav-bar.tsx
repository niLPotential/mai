"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import LogoShort from "/public/logo_short.png";

import { Separator } from "@/components/ui/separator";

export function NavBar() {
  return (
    <div className="flex h-16 justify-center gap-2 p-5 text-xl">
      <Separator orientation="vertical" />
      <Image src={LogoShort} alt="MAI Logo" height={25} />
      <Link href="/">Home</Link>
      <Separator orientation="vertical" />
      <Link href="/chat">Make Music</Link>
      <Separator orientation="vertical" />
      <Link href="/about">About</Link>
      <Separator orientation="vertical" />
      <Link href="/shop">Market</Link>
      <Separator orientation="vertical" />
      <Link href="/login">My Page</Link>
      <Separator orientation="vertical" />
      <Link href="/contact">Contact</Link>
      <Separator orientation="vertical" />
    </div>
  );
}
