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
            rounded-2xl
            bg-peach 
            flex
            items-center
            justify-around
            relative
            overflow-hidden
        "
    >
        <div className="text-white">
            <Image
                width={640}
                height={640}
                alt="Circle-Image"
                src={`/assets/about/bg-pattern-hero-about-1.svg`}
                className={`
                    absolute
                    left-0
                    top-[-10rem]
                    z-[1]
                    rotate-90
                `}
            />
            <h1 className="text-5xl">
                Contact Us
            </h1>
            <p className="w-[445px] mt-8 leading-[26px]">
                Ready to take it to the next level? Let’s talk about your project or
                idea and find out how we can help your business grow. If you are
                looking for unique digital experiences that’s relatable to your
                users, drop us a line.
            </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} >
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
            
            <div className="flex justify-end">
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