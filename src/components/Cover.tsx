/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import { notification } from "antd";
import React from "react";

export default function Cover() {
  const [api, contextHolder] = notification.useNotification();

  const showNotification = () => {
    api.open({
      message: 'Coming Soon',
      description:
        'Hey, I am cooking it up...',
      duration: 0,
    });
  };

  return (
    <>
    {contextHolder}
      <section>
        <div className="bg-[url('/assets/images/banner.jpg')] bg-cover w-full">
          <div className="flex flex-row pt-24 pb-12 lg:pb-16">
            <div className="flex flex-col flex-1 px-10 justify-center">
              <div className="w-full md:w-1/3 text-[9px] md:text-base text-center border rounded-sm p-2 bg-[#4a2fbd80]">
                Welcome to my portfolio
              </div>
              <div className="py-3">
                <h1 className="text-lg md:text-4xl font-bold">{`Hi! I'm Cream`}</h1>
                <h1 className="text-lg md:text-4xl font-bold">Software Developer</h1>
                <p className="text-[9px] md:text-base py-2">🌱 Transitioning from Environment Officer to Software Developer has ignited my passion for perpetual growth in coding. Now specializing in crafting websites and mobile apps. 💻 </p>
              </div>
              <div
                className="flex flex-row space-x-5 items-center"
                onClick={showNotification}
              >
                <p className="text-[9px] md:text-base">{`Let's connect`}</p>
                <ArrowCircleRightOutlined className="w-3 md:w-6" />
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center md:p-10">
              <img
                className="md:w-[80%] w-[75%] rounded-full"
                src="/assets/images/avatar.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
