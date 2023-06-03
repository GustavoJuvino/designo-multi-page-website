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
          h-[40rem]
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
          <h1 className="text-5xl">
            Award-winning custom <br/>
            designs and digital <br/>
            branding solutions
          </h1>
          <p className="text-base mt-9">
            With over 10 years in the industry, we are experienced <br/>
            in creating fully responsive websites, app design, and engaging <br/>
            brand experiences. Find out more about our services.
          </p>
          <button className="mt-10">Learn More</button>
        </div>

        <span className="
              absolute
              lg:right-0
              right-[-8%]
              sm:right-[-10%]
              max-lg:top-[16%]
              sm:w-[640px]
              lg:h-[100%]
              sm:h-[640px]
              w-[500px]
              h-[500px]
              sm:rounded-[100%]
              rounded-l-[100%]
              bg-gradient-to-t from-peach from-[40%] to-[#5D0202]
              opacity-20
              z-10
            "
        />

  
          <Image 
            width={280}
            height={572}
            alt="phone"
            src="/assets/home/image-hero-phone.png"
            className="
              lg:mt-[320px]
              mt-[320px]
              lg:w-[500px]
              w-[350px]
              h-auto
              z-20
              absolute
              lg:right-0
            "
          />

      </section>
    </main>
  )
};
