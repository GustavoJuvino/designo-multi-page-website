import Footer from "./components/Footer/Footer";
import HomeContainer from "./components/Home/HomeContainer";
import IconsHome from "./components/Home/IconsHome";
import Projects from "./components/Design/Projects";
import LeafBackground from "./components/LeafBackground";

export default function Home() {
  return (
    <main>
      <HomeContainer />
      <div className="absolute top-[28rem] z-[-1]">
        <LeafBackground />
      </div>
    
      {/* Projects */}
      <section id="projects" className="flex justify-center xl:mt-[160px]">
        <div className="max-xl:hidden">
          <Projects type="web-design-xl" />
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
            <Projects type="web-design" />
          </div>
            <Projects type="app-design" />
            <Projects type="graphic-design" />
        </div>
      </section>
      
      <section className="relative">
        <div className="absolute right-0 top-[8rem] z-[-1] rotate-180">
          <LeafBackground />
        </div>
        <IconsHome />
      </section>

      <Footer card={true} />
    </main>
  )
};
