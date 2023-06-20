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
    <div className="
            xl:px-[165px]
            sm:px-9
            mt-16
            mb-[160px]
        "
    >
        <div className={`
                w-full
                h-auto
                sm:rounded-2xl
                flex
                max-lg:flex-col-reverse
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
                    max-lg:items-center
                    max-lg:text-center
                    lg:px-24
                    mobile:px-14
                    px-6
                    ${type === 1 && "lg:h-[30rem] text-white"}
                    ${type === 2 && "lg:h-[40rem] text-black"}
                    sm:h-[320px]
                    h-[486.8px]
                `}
            >
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
                        ${type === 1 ?
                            `
                                lg:bottom-0
                                sm:bottom-24
                                bottom-[30%]
                                sm:left-0
                                left-[10%]
                            ` : 
                            `
                                top-[27rem]
                                left-[10rem]
                            `
                        }
                    `}
                
                />
                <h1 className={`
                        mobile:text-5xl
                        text-3xl
                        ${type === 2 && "text-peach"}
                    `}
                >
                    {title}
                </h1>
                <div className={`
                        mt-8
                        ${type === 1 ? "2xl:w-[56%] sm:w-[70%]" : "2xl:w-[55%] sm:w-[70%]"}
                    `}
                >
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
                    max-lg:hidden
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
                    rounded-t-2xl
                    z-[2]
                    lg:hidden

                `}
            />
        </div>
    </div>
  )           
}

export default ContainerAbout;