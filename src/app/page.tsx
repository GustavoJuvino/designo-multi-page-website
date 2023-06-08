import Image from "next/image";
import Footer from "./components/Footer/Footer";
import HomeContainer from "./components/Home/HomeContainer";
import IconsHome from "./components/Home/IconsHome";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <HomeContainer />

    <Image 
      width={1006}
      height={594}
      alt="leaf-background"
      src="/assets/home/bg-pattern-leaf.svg"
      className="
        absolute
        top-[28rem
        z-[-1]
        max-lg:hidden
      "
    />

      {/* Projects */}
      <section className="flex justify-center xl:mt-[160px]">
        <div className="max-xl:hidden">
          <Projects webXL={true} />
        </div>
        <div className="
            grid
            grid-cols-1
            gap-5
            max-xl:mt-[120px]
            xl:ml-8
          "
        >
          <div className="xl:hidden">
            <Projects web={true} />
          </div>
          <Projects app={true} />
          <Projects graphic={true} />
        </div>
      </section>
      
      <section className="relative">
        <Image 
            width={1006}
            height={594}
            alt="leaf-background"
            src="/assets/home/bg-pattern-leaf.svg"
            className="
              absolute
              right-0
              top-[8rem]
              z-[-1]
              rotate-180
              max-lg:hidden
            "
          />
        <IconsHome />
      </section>

      <Footer card={true} />
    </main>
  )
};
