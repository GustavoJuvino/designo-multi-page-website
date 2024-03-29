import React from 'react';
import Image from "next/image";

interface ContainerDesignProps {
  title: string | undefined;
  text: string;
  design: string
}

const ContainerDesign: React.FC<ContainerDesignProps> = ({
  title,
  text,
  design
}) => {

  return (
    <section className="flex items-center justify-center">
      <div className="
          w-full
          sm:h-64
          h-[320px]
          bg-peach
          sm:rounded-2xl
          relative
          flex
          flex-col
          justify-center
          items-center
          text-center
          overflow-hidden
        "
      >
        <div className="text-white flex flex-col items-center z-20 max-sm:px-6">
          <h1 className="sm:text-5xl text-3xl max-sm:font-medium">
            {title}
          </h1>
          <p className="sm:w-[60%] w-[66%] mt-6">
            {text}
          </p>
        </div>

        {/* Backgrounds */}
        <Image 
          width={300}
          height={300}
          alt="Circles-Background"
          src={`/assets/${design.toLowerCase()}-design/bg-pattern-intro-${design.toLowerCase()}.svg`}
          className={`
            max-sm:hidden
            absolute
            w-auto
            object-cover
            z-10
            right-0
            ${design === "app" && "left-0"}
            ${design === "graphic" && "left-0"}
          `}
        />

        <Image 
          width={300}
          height={300}
          alt="Circle-Background"
          src="/assets/bg-pattern-small-circle.svg"
          className="sm:hidden absolute right-0 top-0 rotate-[280deg]"
        />
      </div>
    </section>
  )
}

export default ContainerDesign;