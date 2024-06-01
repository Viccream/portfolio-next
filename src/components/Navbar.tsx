/* eslint-disable @next/next/no-img-element */
"use client";
import { MENUS } from "@/constants/menu";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Contact from "./Contant";

export default function NavBar() {
  const TOP_OFFSET = 50;
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <nav
      className={`w-full fixed bg-12 px-10 py-4 z-100 ${isScroll ? "bg-[#121212]" : "bg-transparent"}`}
    >
      <div className="flex items-center space-x-8">
        <div className="flex-auto">
          <Logo />
        </div>
        <div className="lg:flex hidden flex-row space-x-8 ">
          {MENUS.map((menu) => (
            <Link
              href={menu.link}
              className={`cursor-pointer`}
              target={menu.newTab ? "_blank" : ""}
              key={menu.label}
            >
              <p className=" text-[#faf5ff] hover:text-white">{menu.label}</p>
            </Link>
          ))}
        </div>
        <Contact />
        <Link
          href="/assets/file/arisara_resume.pdf"
          className={`cursor-pointer lg:flex hidden`}
          download="resume"
        >
          <div className="rounded-sm border py-4 px-6 cursor-pointer">
            <p>{`Download Resume`}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
