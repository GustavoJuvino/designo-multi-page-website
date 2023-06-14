"use client";

import React, { MouseEvent, useState } from 'react';
import Image from "next/image";

interface CardsProps {
    title: string;
    text: string;
    imgSrc: string;
}

const Cards: React.FC<CardsProps> = ({
    title,
    text,
    imgSrc
}) => {
  const [activeHover, setActiveHover] = useState(false);

  const handleMouseEvent = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if(e.type === "mouseover") setActiveHover(true)
        else setActiveHover(false)
    }


  return (
    <section className="
            max-sm:flex
            items-center
            justify-center
            w-full
            h-auto
            mt-8

        "
    >
        <div className="
                flex
                lg:flex-col
                max-sm:flex-col
                lg:w-[350px]
                max-sm:w-[350px]
            "
        >
            <div>
                <Image 
                    width={350}
                    height={320}
                    alt="card-image"
                    src={`/assets/${imgSrc}/image-${title}.jpg`}
                    className="
                        w-[400px]
                        h-auto
                        object-cover
                    "
                />
            </div>

            {/* Texts */}
            <div 
                onMouseOver={handleMouseEvent}
                onMouseLeave={handleMouseEvent}
                className="
                    lg:w-full
                    sm:w-[60%]
                    w-auto
                    lg:h-[156px]
                    max-sm:h-[156px]
                    bg-white-peach
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    cursor-pointer
                    duration-300
                    hover:bg-peach
                    hover:text-white
                "
            >
                    <h1 className={`text-xl ${activeHover ? "text-white" : "text-peach"}`}>
                        {title.toUpperCase()}
                    </h1>
                    <p className="lg:w-[80%] sm:w-[44%] w-[80%] mt-4">
                        {text}
                    </p>
            </div>
        </div>
    </section>
  )
}

export default Cards;