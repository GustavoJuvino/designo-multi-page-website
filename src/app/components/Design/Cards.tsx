"use client";

import React, { MouseEvent, useState } from 'react';
import Image from "next/image";

interface CardsProps {
    title: string;
    text: string;
    src: string;
}

const Cards: React.FC<CardsProps> = ({
    title,
    text,
    src
}) => {
  const [activeHover, setActiveHover] = useState(false);

  const handleMouseEvent = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if(e.type === "mouseover") setActiveHover(true)
        else setActiveHover(false)
    }

  return (
    <section className="
            max-md:flex
            items-center
            justify-center
            w-full
            h-auto
        "
    >
        <div className="
                flex
                xl:flex-col
                max-md:flex-col
                xl:w-[350px]
                max-md:w-[350px]
                max-small-mobile:w-auto
            "
        >
            <div>
                <Image 
                    width={350}
                    height={320}
                    alt="card-image"
                    src={src}
                    className="
                        w-[400px]
                        h-auto
                        object-cover
                        xl:rounded-t-2xl
                        md:rounded-tr-none
                        rounded-t-2xl
                        max-xl:rounded-l-2xl
                        max-md:rounded-b-none
                    "
                />
            </div>

            {/* Texts */}
            <div 
                onMouseOver={handleMouseEvent}
                onMouseLeave={handleMouseEvent}
                className="
                    xl:w-full
                    md:w-[60%]
                    w-auto
                    xl:h-[156px]
                    max-md:h-[156px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    bg-white-peach
                    xl:rounded-b-2xl
                    md:rounded-r-2xl
                    max-md:rounded-b-2xl
                    cursor-pointer
                    duration-300
                    hover:bg-peach
                    hover:text-white
                "
            >
                    <h1 className={`text-xl ${activeHover ? "text-white" : "text-peach"}`}>
                        {title.toUpperCase()}
                    </h1>
                    <p className="w-[80%] mt-4">
                        {text}
                    </p>
            </div>
        </div>
    </section>
  )
}

export default Cards;