"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
// import { LinkPreview } from "./ui/link-preview";
const content = [
  {
    title: "Connect Your Wallet",
    description:
      "Start by connecting your any ethereum wallet to Xfile to access the app. Make sure the wallet is connected to Sepolia Test Network and loaded up with some ETH. To learn how to do so ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/metamask.png"
          width={200}
          height={200}
          className=" "
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Upload Your Files",
    description:
      "Upload your documents securely to our decentralized storage with just a few clicks. Select the file from your system, Select the date and time at which it should be unlocked, enter the addresses of users whom you want to give access and submit.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-blue">
        <Image
          src="/fileUpload.svg"
          width={300}
          height={400}
          className="h-full w-full p-2"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Set Access Permissions",
    description:
      "Take control of your data with Xfile's flexible access settings. Specify who can view or download your files and set customizable access periods to ensure your files remain secure and accessible only to authorized users. This feature allows you to manage your data permissions effectively and confidently.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/access.svg"
          width={300}
          height={400}
          className="h-full w-full p-2"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Unlock and Download",
    description:
      "Authorized users can easily unlock and download files after the specified access period. Xfile ensures that only users with the correct permissions can access your data, providing a secure way to share and manage sensitive information. This ensures that your files remain protected until the exact moment they are needed.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-blue-800">
      <Image
          src="/down.svg"
          width={300}
          height={400}
          className="h-full w-full p-2"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="sm:p-10 p-1">
      <StickyScroll content={content} />
    </div>
  );
}
