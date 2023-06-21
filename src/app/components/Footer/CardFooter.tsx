import React from 'react';
import Button from "../Button";
import Image from "next/image";

const CardFooter = () => {
  return (
    <section className="flex justify-center mt-[16rem]">
      <div className="
        absolute
        md:top-0
        top-[-25%]
        z-50
        xl:w-[1111px]
        md:w-[690px]
        mobile:w-[327px]
        xl:h-[290px]
        md:h-[350px]
        h-[380px]
        bg-peach
        rounded-2xl
        flex
        max-xl:flex-col
        md:justify-between
        justify-center
        items-center
        max-xl:text-center
        xl:px-[4%]
        xl:mx-8
        md:mx-10
        overflow-hidden
      "
      >
        <div className="text-white max-xl:mt-14">
          <h1 className="text-4xl max-md:tracking-[0] max-md:leading-[36px]  z-50">
            Let's talk about <br />
            your project
          </h1>
          <p className="mt-5 z-50 max-md:mx-6 max-small-mobile:text-xs">
            Ready to take it to the next level? Contact us today and find out how <br id="br" />
            our expertise can help your business grow.
          </p>
        </div>

        <div className="z-50 max-xl:mt-8 max-xl:mb-14">
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
            xl:h-fit
            h-[600px]
            absolute
            max-xl:top-[-80px]
            z-40
            object-cover
          "
        />
      </div>
    </section>
  )
}

export default CardFooter;