"use client";

import React from 'react';
import Button from "../Button";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const CardFooter = () => {
  const router = useRouter()

  return (
    <section className="flex justify-center">
      <div className="
          xl:w-[1111px]
          md:w-[690px]
          small-mobile:w-[328px]
          w-[100%]
          xl:h-[292px]
          md:h-[350px]
          h-[380px]
          bg-peach
          rounded-2xl
          absolute
          flex
          justify-center
          items-center
          overflow-hidden
        "
      >
        <div className="
            w-[920px]
            flex
            max-xl:flex-col
            md:justify-between
            items-center
            max-xl:text-center
          "
        >
          <div className="text-white z-50 max-md:w-[85%]">
            <h1 className="md:text-4xl text-[32px] max-md:font-medium leading-none">
              Let’s talk about <br/>
              your project
            </h1>
            <p className="mt-5 max-md:text-[15px]">
              Ready to take it to the next level? Contact us today and find out <br className="max-md:hidden" />
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="max-xl:mt-8 z-50">
            <Button 
              click={() => router.push("/Contact")}
              value="GET IN TOUCH"
              type="light"
            />
          </div>

          {/* Background */}
          <Image 
            width={1200}
            height={290}
            alt="Circles-Background"
            src="/assets/bg-pattern-call-to-action.svg"
            className="
              md:w-auto
              w-[650px]
              md:h-auto
              h-[650px]
              absolute
              right-0
              max-md:left-0
              max-xl:top-[-6rem]
              max-md:top-[-8rem]
              z-40
              object-cover
            "
          />
        </div>
      </div>
    </section>
  )
}

export default CardFooter;