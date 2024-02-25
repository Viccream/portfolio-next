/* eslint-disable @next/next/no-img-element */
'use client';
import { MENUS } from "@/constants/menu";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Contact from "./Contact";

export default function NavBar() {
  const TOP_OFFSET = 50;
  const [isScroll, setIsScroll] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed bg-12 px-10 py-8 z-100 ${isScroll ? "bg-[#121212]" : "bg-transparent"}`}>
      <div className="flex items-center space-x-8">
        <div className="flex-auto">
          <img
            src="/assets/images/logo.svg" alt="logo"
          />
        </div>
        <div className="md:flex hidden flex-row space-x-8 ">
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
        <div className="md:flex hidden text-white rounded-sm border py-4 px-6">
          <p>{`Let's connect`}</p>
        </div>
      </div>
    </nav>
  )
}
