"use client"
import React from 'react';
import Button from "../components/Button";
import Input from "./Input";

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
        "
    >
        <div className="text-white">
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
            <Button 
                type="light"
                value="SUBMIT"
                click={() => console.log("teste")}
            />
        </form>
    </section>
  )
}

export default ContactContainer;