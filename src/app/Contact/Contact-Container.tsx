"use client"

import React from 'react';
import Input from "./Input";
import Image from "next/image";
import Button from "../components/Button";

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
        <div className="
                text-white
                max-xl:sm:w-[84%]
                w-[56%]
                max-xl:mb-12
                max-sm:mt-[72px]
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
                    left-[-3.5rem]
                    xl:top-[-10rem]
                    sm:top-[-5rem]
                    top-0
                    sm:rotate-90
                    z-10
                    max-sm:hidden
                `}
            />
            <h1 className="sm:text-5xl text-[32px] max-sm:font-medium">
                Contact Us
            </h1>
            <p className="xl:w-[445px] mt-8 leading-[26px] z-50">
                Ready to take it to the next level? Let’s talk about your project or
                idea and find out how we can help your business grow. If you are
                looking for unique digital experiences that’s relatable to your
                users, drop us a line.
            </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="z-40 max-xl:mx-6 max-sm:w-[58%]">
            <Input
                type="text"
                name="Name"
                value="Name"
            />
            <Input
                type="email"
                name="Email"
                value="Email Adress"
            />
            <Input
                type="number"
                name="Phone"
                value="Phone"
            />
            <Input
                type="text-area"
                name="Message"
                value="Your Message"
            />
            
            <div className="flex sm:justify-end justify-center max-sm:pb-[72px]">
                <Button 
                    type="light"
                    value="SUBMIT"
                    click={() => console.log("teste")}
                />
            </div>
        </form>
    </section>
  )
}

export default ContactContainer;