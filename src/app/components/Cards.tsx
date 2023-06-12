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
            flex
            flex-col
            w-[350px]
            h-[478px]
            bg-white-peach
            mt-[160px]
            rounded-2xl
        "
    >
        <div>
            <Image 
                width={350}
                height={320}
                alt="card-image"
                src={`/assets/${imgSrc}/image-${title}.jpg`}
                className="rounded-2xl"
            />
       </div>
            
        <div className="
                flex
                flex-col
                items-center
                text-center
                my-8
            "
        >
            <h1 className="text-xl text-peach">
                {title.toUpperCase()}
            </h1>
            <p className="w-[80%] mt-4">
                {text}
            </p>
        </div>
    </div>
  )
}

export default Cards;