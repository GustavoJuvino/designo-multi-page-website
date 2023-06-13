import React from 'react';
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
  return (
    <div className="
           lg:bg-white-peach
            flex
            lg:flex-col
            max-sm:flex-col
            lg:w-[350px]
            w-full
            lg:h-[478px]
            h-auto
            rounded-2xl
            mt-8
            items-center
            text-center
        "
    >
        <div>
            <Image 
                width={350}
                height={320}
                alt="card-image"
                src={`/assets/${imgSrc}/image-${title}.jpg`}
                className="
                    lg:rounded-2xl
                    sm:rounded-l-2xl
                    max-sm:rounded-2xl
                    w-full
                    h-[320px]
                    object-cover
                "
            />
       </div>
            
        <div className="
                flex
                flex-col
                justify-center
                items-center
                text-center
                my-8
                max-lg:bg-white-peach
                max-sm:bg-transparent
                max-lg:w-[60%]
                max-lg:h-[320px]
                max-sm:h-auto
                max-lg:rounded-r-2xl
            "
        >
            <h1 className="text-xl text-peach">
                {title.toUpperCase()}
            </h1>
            <p className="lg:w-[80%] sm:w-[44%] w-[80%] mt-4">
                {text}
            </p>
        </div>
    </div>
  )
}

export default Cards;