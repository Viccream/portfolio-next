/* eslint-disable @next/next/no-img-element */
import { MENUS } from "@/constants/menu";
import Link from "next/link";
import React from "react";
import Contact from "./Contact";

export default function NavBarSection() {
  return (
    <nav className="w-full bg-12 p-6 bg-[#121212]">
      <div className="flex items-center space-x-8">
        <div className="flex-auto">
          <img
            src="/assets/images/logo.svg" alt="logo"
          />
        </div>
        <div className="flex flex-row space-x-8">
          {MENUS
            .map(menu => (
              <Link
                href={menu.link}
                className={`cursor-pointer`}
                target={menu.newTab ? '_blank' : ''}
                key={menu.label}
                >
                <p className=" text-[#808080] hover:text-white">
                  {menu.label}
                </p>
              </Link>
            ))}
        </div>
        <Contact />
        <div className="text-white rounded-sm border py-4 px-6">
          <p>{`Let's connect`}</p>
        </div>
      </div>
    </nav>
  )
}
