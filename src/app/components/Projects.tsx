"use client";

import Image from "next/image";
import React, { MouseEvent, useState } from 'react';

interface ProjectsProps {
    web?: boolean;
    app?: boolean;
    graphic?: boolean;
    webXL?: boolean
}

let srcImg = "";

const Projects: React.FC<ProjectsProps> = ({
    web,
    app,
    graphic,
    webXL
}) => {
    const [activeBG, setActiveBG] = useState(false);

    const handleMouseEvent = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if(e.type === "mouseover") setActiveBG(true)
        else setActiveBG(false)
    }
    
    if(web) srcImg = "web-design-small"
    else if(webXL) srcImg = "web-design-large"
    else if(app) srcImg = "app-design"
    else if (graphic) srcImg = "graphic-design";

    return (
        <section className="flex justify-center mx-[30px]">
            <section className={`
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
                    rounded-[15px]
                    cursor-pointer
                    relative
                    ${webXL && "xl:h-[640px]"}
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
                        {web && "WEB DESIGN"}
                        {webXL && "WEB DESIGN"}
                        {app && "APP DESIGN"}
                        {graphic && "GRAPHIC DESIGN"}
                    </h1>
                    <div className="flex items-center sm:mt-8 mt-4 z-50">
                        <p className="
                                sm:text-xl
                                small-mobile:text-base
                                text-xs
                                small-mobile:tracking-[5px]
                                hover:underline
                            "
                        >
                            VIEW PROJECTS
                        </p>
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
                        rounded-[15px]
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
                    src={`/assets/home/image-${srcImg}.jpg`}
                    className={`
                        absolute
                        rounded-[15px]
                        object-cover
                        col-start-1
                        row-start-1
                        max-xl:w-[690px]
                        max-xl:h-full
                    `}
                />
            </section>
        </section>
    )
}

export default Projects;