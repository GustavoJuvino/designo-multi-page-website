"use client";

import React from 'react';
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

const locations = ["canada", "australia", "united-kingdom"]

const Locations = () => {
  const router = useRouter();

  return (
    <div className="
            flex
            max-xl:flex-col
            xl:justify-between
            max-xl:items-center
            max-xl:sm:gap-20
            gap-12
            max-sm:mt-[7.5rem]
        "
    >
      {locations.map((location) => (
        <div key={location} className="flex flex-col justify-center items-center">
          <div>
            <Image
              width={202}
              height={202}
              alt="Circle-Background-Icon"
              src="/assets/home/bg-pattern-hero-home.svg"
              className="absolute z-[-1]"
            />
            <Image 
              width={202}
              height={202}
              alt="Location-Icon"
              src={`/assets/about/illustration-${location}.svg`}
            />
          </div>

          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-xl font-medium mb-8">
              {location.replaceAll("-", " ").toUpperCase()}
            </h1>
            <Button
              click={() => router.push("/Locations")}
              type="dark"
              value="SEE LOCATION"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Locations;