import HomeContainer from "./components/Home/HomeContainer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <HomeContainer />

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
    </main>
  )
};
