"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconApp } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo({title,desc,img,height,width,classs}) {
  return (
    <div className="m-2">
      <BackgroundGradient className="rounded-[22px]  h-96    sm:p-10 bg-white ">
        <Image
          src={img}
          alt="jordans"
          height={height}
          width={width}
          className={classs}
        />
        <p className="text-base sm:text-xl text-blue-950 font-semibold mt-4 mb-2 text-center">
         {title}
        </p>

        <p className="text-sm text-blue text-center">
         {desc}
        </p>
        
      </BackgroundGradient>
    </div>
  );
}
