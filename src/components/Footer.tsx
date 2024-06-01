/* eslint-disable @next/next/no-img-element */
import React from "react";
import Logo from "./Logo";
import Contact from "./Contant";

export default function Footer() {
  return (
    <section>
      <div className="bg-black bg-cover w-full z-0 py-10 px-10">
        <div className="flex items-center space-x-8">
          <div className="flex-auto">
            <Logo />
          </div>
          <Contact />
        </div>
      </div>
      <div
        className={`bg-[url('/assets/images/banner.jpg')] w-full h-16`}
      ></div>
    </section>
  );
}
