import React from 'react';
import Image from "next/image";

const iconsData = [
  {
    title: "passionate",
    text: `Each project starts with an in-depth brand research
        to ensure we only create products that serve a
        purpose. We merge art, design, and technology
        into exciting new solutions.
      `,
  },
  {
    title: "resourceful",
    text: `Everything that we do has a strategic purpose. We
        use an agile approach in all of our projects and
        value customer collaboration. It guarantees
        superior results that fulfill our clients’ needs.
      `,
  },
  {
    title: "friendly",
    text: `We are a group of enthusiastic folks who know how
      to put people first. Our success depends on our
      customers, and we strive to give them the best
      experience a company can provide.
    `,
  }
]

const IconsHome = () => {
  return (
    <section className="
        flex
        justify-center
        xl:mt-[10rem]
        max-mobile:mx-6
        max-md:mb-[120px]
      "
    >
      <div className="
          xl:w-[1111px]
          h-auto
          xl:flex
          justify-between
        "
      >
        {iconsData.map((data) => (
          <div 
            key={data.title}
            className="
              xl:w-[350px]
              md:w-[689px]
              small-mobile:w-[327px]
              xl:h-[412px]
              md:h-[202px]
              mobile:h-[412px]
              max-xl:pt-[88px]
              max-md:pt-0
              max-xl:mt-8
              max-md:mt-20
              flex
              xl:flex-col
              max-md:flex-col
              items-center
            "
          >
            <Image 
              width={202}
              height={202}
              alt="Background-Icon"
              src="/assets/home/bg-pattern-hero-home.svg"
              className="absolute z-[-1]"
            />
            <Image 
              width={202}
              height={202}
              alt="Home-Icon"
              src={`/assets/home/illustration-${data.title}.svg`}
            />

            {/* Texts */}
            <div className="
                xl:text-center
                max-md:text-center
                xl:mt-12
                max-md:mt-12
                max-xl:ml-12
                max-md:ml-0
              "
            >
              <h1 className="text-xl mb-8">
                {data.title.toUpperCase()}
              </h1>
              <p>
                {data.text}
              </p>
            </div>
          </div>
        ) )}
      </div>
    </section>
  )
}

export default IconsHome;