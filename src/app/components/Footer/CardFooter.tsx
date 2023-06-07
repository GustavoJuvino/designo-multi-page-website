import React from 'react';
import Button from "../Button";
import Image from "next/image";

const CardFooter = () => {
  return (
    <section className="flex justify-center">
      <div className="
        absolute
        top-[0px]
        z-50
        sm:w-[55%]
        lg:h-[290px]
        w-auto
        h-auto
        bg-peach
        rounded-[15px]
        flex
        max-lg:flex-col
        sm:justify-between
        justify-center
        items-center
        max-lg:text-center
        lg:px-28
        lg:mx-8
        sm:mx-10
        mx-6
        px-6
        overflow-hidden
      "
      >
        <div className="text-white  max-lg:mt-14">
          <h1 className="small-mobile:text-4xl text-2xl z-50">
            Let's talk about <br />
            your project
          </h1>
          <p className="mt-5 z-50 max-small-mobile:text-xs">
            Ready to take it to the next level? Contact us today and find out how <br id="br" />
            our expertise can help your business grow.
          </p>
        </div>

        <div className="z-50 max-lg:mt-8 max-lg:mb-14">
          <Button 
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
            w-auto
            lg:h-fit
            h-[600px]
            absolute
            max-lg:top-[-80px]
            z-40
            object-cover
          "
        />
      </div>
    </section>
  )
}

export default CardFooter;