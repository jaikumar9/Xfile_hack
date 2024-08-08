"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Academic Institutions
          </h2>
          <p className="mt-3 text-left  text-base/6 text-neutral-200">
          Securely store and manage exam papers, reducing the risk of leaks and unauthorized access.This ensures that only authorized personnel can access sensitive documents, thereby maintaining the integrity of the examination process.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-yellow-800 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Legal Firms
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Ensure confidentiality and secure sharing of legal documents, such as contracts and case files, with customizable access permissions for clients and legal partners.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Health Care Providers
        </h2>
        <p className="mt-4 text-left  text-base/6 text-neutral-200">
        Protect patient records and sensitive medical data by granting access exclusively to authorized healthcare professionals, maintaining privacy and compliance with regulations.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Personal & Family Document Storage
          </h2>
          <p className="mt-4  sm:w-[500px] text-left  text-base/6 text-neutral-200">
          Store personal documents like passports, IDs, and financial records with the assurance of decentralized security and privacy.Safely store and share important family documents like birth certificates, wills, and insurance policies with trusted family members.
          </p>
        </div>
       
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Real Estate
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Manage property records, titles, and legal documents securely, providing access to authorized buyers, sellers, and real estate professionals.
        </p>
      </WobbleCard>
    </div>
  );
}
