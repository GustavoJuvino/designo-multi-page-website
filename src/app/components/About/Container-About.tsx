import Image from "next/image";
import React from 'react';

interface ContainerAboutProps {
    type: number;
    title: string;
    text: string;
    reverse?: boolean;
    src: string;
}

const ContainerAbout: React.FC<ContainerAboutProps> = ({
    type,
    title,
    text,
    reverse,
    src
}) => {
  return (
    <div className="
            xl:px-[165px]
            sm:px-9
            px-6
        "
    >
        <div className={`
            w-full 
            bg-peach
            rounded-2xl
            flex
            max-lg:flex-col-reverse
            relative
            overflow-hidden
            ${type === 1 && "h-[30rem]"}
            ${type === 2 && "h-[40rem]"}
        `}>
            <Image 
                width={640}
                height={640}
                alt="Circle-Background"
                src="/assets/about/bg-pattern-hero-about-desktop.svg"
                className="absolute bottom-0 z-[1]"
            />
            {/* Texts */}
            <div className="
                    text-white
                    flex
                    flex-col
                    justify-center
                    lg:mx-24
                    mx-14
                    w-full
                    h-full
                "
            >
                <h1 className="text-5xl">
                    {title}
                </h1>
                <p className="2xl:w-[56%] mt-8">
                    {text}
                </p>
            </div>
            <Image
                width={476}
                height={type === 1 ? 480 : 640}
                alt="Container-Image"
                src={`/assets/about/${src}.jpg`}
                className="w-auto lg:h-auto h-[320px] object-cover object-bottom rounded-r-2xl z-[2]"
            />

        </div>
    </div>
  )
}

export default ContainerAbout;