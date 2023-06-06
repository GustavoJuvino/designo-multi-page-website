import Image from "next/image";
import React from 'react';

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
        lg:flex
        lg:justify-center
        xl:mt-[10rem]
        mt-[7.5rem]
      "
    >
      {iconsData.map((data) => (
        <div className="
            lg:w-[350px]
            lg:h-[412px]
            sm:h-[202px]
            flex
            lg:flex-col
            max-sm:flex-col
            items-center
            lg:mx-8
            sm:mx-10
            mx-6
            max-lg:mb-8
            max-sm:mb-20
          "
        >
          <Image 
            width={202}
            height={202}
            alt="Home-Icon"
            src={`/assets/home/illustration-${data.title}.svg`}
          />

          {/* Texts */}
          <div className="
              lg:text-center
              max-sm:text-center
              lg:mt-12
              max-sm:mt-12
              max-lg:ml-12
              max-sm:ml-0
              max-lg:w-[27.5rem]
              max-sm:w-[100%]
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
    </section>
  )
}

export default IconsHome;