import React from 'react';
import Image from "next/image";
import Form from "./Form";

const ContactContainer = () => {
  return (
    <section className="
            w-full
            h-full
            sm:rounded-2xl
            bg-peach 
            flex
            max-xl:flex-col
            justify-center
            items-center
            max-sm:text-center
            relative
            overflow-hidden
        "
    >
        <Image
            width={640}
            height={640}
            alt="Circle-Image"
            src={`/assets/about/bg-pattern-hero-about-1.svg`}
            className={`
                max-sm:w-[292px]
                absolute
                xl:left-0
                sm:left-[-8rem]
                left-0
                max-sm:pr-1
                xl:top-[-10rem]
                sm:top-[-5rem]
                top-0
                sm:rotate-90
                rotate-[280deg]
                z-10
            `}
        />
        <div className="
                text-white
                max-xl:sm:w-[84%]
                w-[56%]
                max-xl:mb-12
                max-sm:mt-[72px]
                z-50
            "
        >
            <h1 className="sm:text-5xl text-[32px] max-sm:font-medium">
                Contact Us
            </h1>
            <p className="xl:w-[445px] mt-8 leading-[26px]">
                Ready to take it to the next level? Let’s talk about your project or
                idea and find out how we can help your business grow. If you are
                looking for unique digital experiences that’s relatable to your
                users, drop us a line.
            </p>
        </div>
        <Form />
    </section>
  )
}

export default ContactContainer;