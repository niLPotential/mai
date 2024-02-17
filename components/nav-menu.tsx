"use client";

import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" w-screen p-5">
        <div className="flex flex-1 items-center gap-5">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/compose">Compose</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-3">
                <li>
                  <NavigationMenuLink href="/shop/tokens">
                    Tokens
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="/shop/subscribe">
                    Suscription
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="/shop/promotion">
                    Promotion
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
            <NavigationMenuViewport />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </div>
        <div className="flex items-center gap-5">
          <NavigationMenuItem>
            <NavigationMenuLink href="/account">Account</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/login">Sign In</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
