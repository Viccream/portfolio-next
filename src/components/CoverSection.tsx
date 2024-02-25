/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import React from "react";

export default function CoverSection() {
  return (
    <section>
      <div className="bg-[url('/assets/images/banner-bg.png')] bg-cover h-screen w-full z-0">
        <div className="flex flex-row pt-56">
          <div className="flex-1 m-8">
            <div className=" text-white text-center border rounded-sm w-1/3 p-2 bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80]">
              Welcome to my portfolio
            </div>
            <div className="py-6">
              <h1 className="text-white text-5xl">{`Hi! I'm Cream`}</h1>
              <h1 className="text-white text-5xl">Software Developer</h1>
              <p className="text-white py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="flex flex-row space-x-5">
              <p className="text-white">{`Let's connect`}</p>
              <ArrowCircleRightOutlined className="text-white" />
            </div>
          </div>
          <div className="flex-1 p-8">
            <img
            className="p-4 h-[80%]"
              src="/assets/images/header-img.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}
