import Image from "next/image";
import React from 'react';

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

    if(web) srcImg = "web-design-small"
    else if(webXL) srcImg = "web-design-large"
    else if(app) srcImg = "app-design"
    else if (graphic) srcImg = "graphic-design";

    return (
        <div className={`
                ${webXL && "h-[640px]"}
                w-[540px]
                h-[308px]
                flex
                flex-col
                items-center
                justify-center
                rounded-[15px]
                text-4xl
                text-white
                cursor-pointer
            `}
        >
            <h1 className="z-50">
                {web && "WEB DESIGN"}
                {webXL && "WEB DESIGN"}
                {app && "APP DESIGN"}
                {graphic && "GRAPHIC DESIGN"}
            </h1>
            <div className="flex items-center mt-8 z-50">
                <p className="text-xl hover:underline">
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
            <Image 
                width={540}
                height={308}
                alt="card-image"
                src={`/assets/home/image-${srcImg}.jpg`}
                className={`
                    absolute
                    z-[-1]
                    rounded-[15px]
                    hover:bg-light-peach
                    hover:opacity-80
                    object-cover
                `}
            />
            <div 
                className={`
                        ${webXL ? "h-[640px]" : "h-[308px]"}
                        w-[540px]
                        absolute
                        bg-[#000000]
                        rounded-[15px]
                        opacity-60
                        z-40
                        duration-300
                        hover:bg-light-peach
                        hover:opacity-80
                    `
                }
            />
        </div>
    )
}

export default Projects;