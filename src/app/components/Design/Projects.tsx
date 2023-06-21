"use client";

import React, { MouseEvent, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps { type: string | null }

const Projects: React.FC<ProjectsProps> = ({
    type = "web-design" ||"web-design-xl" || "graphic-design" || "app-design"
}) => {
    const [activeBG, setActiveBG] = useState(false);

    const handleMouseEvent = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if(e.type === "mouseover") setActiveBG(true)
        else setActiveBG(false)
    }

    return (
        <section className="flex justify-center sm:px-6">
            {type ? (
                <section 
                    className={`
                        flex
                        flex-col
                        items-center
                        justify-center
                        xl:w-[540px]
                        sm:w-[690px]
                        w-[330px]
                        xl:h-[308px]
                        sm:h-[200px]
                        h-[250px]
                        rounded-2xl
                        cursor-pointer
                        relative
                        ${type === "web-design-xl" && "xl:h-[640px]"}
                    `}
                >
                    {/* Texts */}
                    <div 
                        onMouseOver={handleMouseEvent}
                        onMouseLeave={handleMouseEvent}
                        className="
                                flex
                                flex-col
                                items-center
                                text-white
                            "
                        >
                            <h1 className="
                                    sm:text-4xl
                                    small-mobile:text-3xl
                                    text-lg
                                    z-50
                                "
                            >
                                {type === "web-design" && "WEB DESIGN"}
                                {type === "web-design-xl" && "WEB DESIGN"}
                                {type === "app-design" && "APP DESIGN"}
                                {type === "graphic-design" && "GRAPHIC DESIGN"}
                            </h1>
                            <div className="flex items-center sm:mt-8 mt-4 z-50">
                                <Link 
                                    href={type === "web-design-xl" ? `/projects/web-design` : `/projects/${type}`}
                                    className="
                                        sm:text-xl
                                        small-mobile:text-base
                                        text-xs
                                        small-mobile:tracking-[5px]
                                        hover:underline
                                    "
                                >
                                    VIEW PROJECTS
                                </Link>
                                <Image 
                                    width={20}
                                    height={20}
                                    alt="right-arrow"
                                    src="/assets/right-arrow.svg"
                                    className="w-[22px] h-[22px] pl-3"
                                />
                            </div>
                    </div>
        
                    {/* Backgrounds */}
                    <div className={`
                            w-full
                            h-full
                            absolute
                            rounded-2xl
                             bg-black
                            opacity-50
                            z-10
                            duration-500
                             hover:bg-light-peach
                            ${activeBG && "bg-light-peach"}
                        `} 
                    />
                    <Image 
                        width={540}
                        height={308}
                        alt="card-image"
                        src={`/assets/home/image-${type}.jpg`}
                        className={`
                            absolute
                            rounded-2xl
                            object-cover
                            col-start-1
                            row-start-1
                            max-xl:w-[690px]
                            max-xl:h-full
                        `}
                    />
                </section>
            ) : ("")}
        </section>
    )
}

export default Projects;