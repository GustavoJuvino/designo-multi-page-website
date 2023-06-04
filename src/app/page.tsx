import Image from "next/image";

export default function Home() {
  return (
    <main className="
        xl:px-[165px]
        sm:px-9
        overflow-hidden
      "
    >
      <section className="
          w-[100%] 
          sm:h-[40rem]
          mobile:h-[43.75rem]
          h-[42rem]
          flex
          max-lg:flex-col
          justify-between
          items-center
          max-lg:text-center
          relative
          bg-peach
          sm:rounded-2xl
          mt-16
          lg:pl-24
          overflow-hidden
        "
      >
        {/* texts col */}
        <div className="text-white z-20 max-lg:mt-16">
          <h1 className="
              mobile:text-5xl
              text-3xl
              font-bold
            "
          >
            Award-winning custom <br id="br" />
            designs and digital <br id="br" />
            branding solutions
          </h1>
          <p className="
              text-base
              mt-9
              max-mobile:leading-[20px]
              max-mobile:px-2
            "
          >
            With over 10 years in the industry, we are experienced <br id="br" />
            in creating fully responsive websites, app design, and engaging <br id="br" />
            brand experiences. Find out more about our services.
          </p>
          <button className="mt-10">Learn More</button>
        </div>

        <Image 
          width={500}
          height={500}
          alt="background-img"
          src="/assets/home/bg-pattern-hero-home.svg"
          className="
            absolute
            lg:right-0
            sm:right-[-10%]
            max-lg:top-24
            max-sm:top-0
            lg:w-auto
            lg:h-auto
            max-sm:w-[100%]
            max-sm:h-[100%]
            max-sm:object-cover
            max-sm:object-left
          "
        />

        <Image 
          width={280}
          height={572}
          alt="phone"
          src="/assets/home/image-hero-phone.png"
          className="
            lg:mt-[250px]
            sm:mt-[320px]
            lg:w-[500px]
            sm:w-[350px]
            max-sm:w-auto
            max-sm:h-[500px]
            z-20
            sm:absolute
            lg:right-0
          "
        />
      </section>

      <div>teste</div>
    </main>
  )
};
