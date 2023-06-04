import Image from "next/image";
import React from 'react';

interface ProjectsProps {
    web?: boolean;
    app?: boolean;
    graphic?: boolean;
    xl?: boolean
}

const Projects: React.FC<ProjectsProps> = ({
    web,
    app,
    graphic,
    xl
}) => {

    return (
        <div className={`
                ${xl && "h-[640px]"}
                w-[540px]
                h-[308px]
                flex
                flex-col
                items-center
                justify-center
                rounded-[15px]
                text-4xl
                text-white
            `}
        >
            <p className="z-50">{web && "WEB DESIGN"}</p>
            <div className="flex items-center mt-8 z-50">
                <p className="text-xl cursor-pointer">
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
                src="/assets/home/image-web-design-small.jpg"
                className="absolute z-[-1] rounded-[15px]"
            />
            <div 
                className="
                    w-[540px]
                    h-[308px]
                    absolute
                    bg-[#000000]
                    rounded-[15px]
                    opacity-60
                    z-40
                "
            />
        </div>
    )
}

export default Projects;