import React from 'react';
import Image from "next/image";
import Button from "../Button";

const HomeContainer = () => {
  return (
    <section className="
        w-full
        h-auto
        flex
        justify-center
        sm:px-6
      "
    >
      <div className="
          xl:w-[1111px]
          sm:w-[689px]
          w-full
          xl:h-[640px]
          h-[843px]
          xl:pl-24
          sm:rounded-2xl
          bg-peach
          flex
          max-xl:flex-col
          items-center
          relative
          overflow-hidden
        "
      >
        {/* Texts */}
        <div className="
            text-white
            max-xl:text-center
            max-xl:mt-[3.75rem]
            max-sm:px-6
            max-small-mobile:px-2
            z-40
          "
        >
          <h1 className="
              mobile:text-5xl
              text-3xl
              font-bold
            "
          >
            Award-winning custom <br id="br" />
            designs and digital <br id="br" />
            branding solutions
          </h1>
          <p className="
              mt-9
              max-mobile:leading-[20px]
            "
          >
            With over 10 years in the industry, we are experienced <br id="br" />
            in creating fully responsive websites, app design, and engaging <br id="br" />
            brand experiences. Find out more about our services.
          </p>
          <div className="mt-10">
            <a href="#projects">
                <Button value="LEARN MORE" type="light" />
            </a>
          </div>
        </div>

        {/* Circle Background */}
        <Image
          width={500}
          height={500}
          priority
          alt="background-img"
          src="/assets/home/bg-pattern-hero-home.svg"
          className="
            absolute
            sm:w-auto
            sm:h-auto
            w-[100%]
            h-[100%]
            xl:right-0
            max-xl:left-[12rem]
            max-sm:left-0
            max-xl:top-24
            z-10
            max-sm:object-cover
            max-sm:object-left
          "
        />

        {/* Phone Image */}
        <Image 
          width={624}
          height={913}
          alt="phone"
          src="/assets/home/image-hero-phone.png"
          className="
            w-auto
            mobile:h-[913px]
            h-[843px]
            absolute
            xl:right-0
            xl:top-[-2rem]
            mobile:top-[18rem]
            top-[20rem]
            z-20
            object-cover
          "
        />
      </div>
    </section>
  )
}

export default HomeContainer;

