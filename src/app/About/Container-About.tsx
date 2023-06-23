import Image from "next/image";
import React from 'react';

interface ContainerAboutProps {
    type: number;
    title: string;
    paragraph: string;
    paragraph2?: string;
    reverse?: boolean;
    src: string;
}

const ContainerAbout: React.FC<ContainerAboutProps> = ({
    type,
    title,
    paragraph,
    paragraph2,
    reverse,
    src
}) => {

  return (
    <div className={`
            w-full
            sm:h-auto
            h-[715px]
            sm:rounded-2xl
            flex
            max-xl:flex-col-reverse
            relative
            overflow-hidden
            ${type === 1 ? "bg-peach" : "bg-white-peach"}
            ${reverse && "flex-row-reverse"}
        `}
    >
        {/* Texts */}
        <div className={`
                w-full
                flex
                flex-col
                justify-center
                max-xl:items-center
                max-xl:text-center
                xl:px-24
                mobile:px-14
                px-6
                ${type === 1 && "xl:h-[30rem] text-white"}
                ${type === 2 && "xl:h-[40rem] text-black"}
                sm:h-[320px]
                h-[486.8px]
                relative
                overflow-hidden
            `}
        >
            {/* Circle Background */}
            <Image 
                width={640}
                height={640}
                alt="Circle-Background"
                src={
                    type === 1 ? "/assets/about/bg-pattern-hero-about-1.svg"
                    : "/assets/about/bg-pattern-hero-about-2.svg"
                }
                className={`
                    absolute
                    z-10
                    ${type === 1 ?
                        `
                            xl:bottom-0
                            sm:bottom-24
                            bottom-[30%]
                            xl:left-0
                            sm:left-[-8rem]
                            left-[15%]
                        ` : 
                        `
                            ${reverse ? "xl:left-[20rem]" : "xl:left-0"}
                            left-[8rem]
                            max-xl:top-[-14rem]
                            max-sm:top-0
                            max-sm:left-0
                        `
                    }
                `}
                />
            
                <h1 className=
                    {`
                        sm:text-5xl
                        text-[32px]
                        max-sm:font-medium 
                        z-20
                        ${type === 2 && "text-peach"}
                    `}
                >
                    {title}
                </h1>
                <div className="sm:mt-8 mt-6 z-20 max-small-mobile:text-xs">
                    <p>{paragraph}</p><br/>
                    <p>{paragraph2}</p>
                </div>
        </div>
        <Image
            width={476}
            height={type === 1 ? 480 : 640}
            alt="Container-Image"
            src={`/assets/about/${src}.jpg`}
            className={`
                object-cover
                max-xl:hidden
                z-[2]
                ${type === 1 ? 
                    `
                        w-[476px]
                        h-[480px]
                        rounded-r-2xl
                    ` 
                    : 
                    `
                        w-[900px]
                        h-[640px]
                        rounded-l-2xl
                    `
                }
            `}
        />
        <Image 
            width={476}
            height={480}
            alt="Container-Image"
            src={`/assets/about/tablet/${src}.jpg`}
            className={`
                w-full
                h-[320px]
                object-cover
                sm:rounded-t-2xl
                z-[2]
                xl:hidden

            `}
        />
    </div>
  )           
}

export default ContainerAbout;