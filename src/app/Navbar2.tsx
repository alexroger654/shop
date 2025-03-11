"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Menu, HoveredLink, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import Link from "next/link";

export function Navbar2() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />

    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl  mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home">
            {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
          </MenuItem>
        </Link>


        <Link href={'/services'}>
          <MenuItem setActive={setActive} active={active} item="Services">
          </MenuItem>
        </Link>
        <Link href={'/how-to-integrate'}>
          <MenuItem setActive={setActive} active={active} item="How To Integrate">
          </MenuItem>
        </Link>
        <Link href={'/contact_us'}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>
        <Link href={'/sign_in'}>
          <MenuItem setActive={setActive} active={active} item="Sign in">
            {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
          </MenuItem>
        </Link>
        <Link href={'/sign_up'}>
          <MenuItem setActive={setActive} active={active} item="Sign up">
            {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
