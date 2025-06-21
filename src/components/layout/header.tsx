"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useState } from "react";
import UnderlinedLink from "../frequents/underlined-link";

export default function Header() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div className="flex justify-between gap-5">
      <h1 className="font-semibold text-lg">George Hum</h1>
      <div className="relative sm:static flex gap-5">
        <button
          className="sm:hidden btn btn-sm btn-square rounded-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          <Bars3Icon className="size-3" />
        </button>
        <div
          className={clsx(
            navOpen
              ? "absolute sm:static block top-10 right-0 p-3 sm:p-0 bg-base-200 flex gap-6 sm:bg-transparent"
              : "hidden sm:flex gap-6"
          )}
        >
          <ul className="flex flex-col gap-1">
            <li>
              <UnderlinedLink href="#">Me</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="#">Blog</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="#">Projects</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="#">Work experience</UnderlinedLink>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li>
              <UnderlinedLink href="#">Résumé</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="#">GitHub</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="#">LinkedIn</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="#">Contact</UnderlinedLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
