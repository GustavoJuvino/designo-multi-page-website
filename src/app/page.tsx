import HomeContainer from "./components/Home/HomeContainer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <HomeContainer />
      <div className="
          flex
          max-xl:flex-col
          justify-center
          mt-[160px]
        "
      >
        <div className="max-xl:hidden">
          <Projects webXL={true} />
        </div>
        <div className="xl:hidden">
          <Projects web={true} />
        </div>
        <div className="xl:ml-[30px]">
          <Projects app={true} />
          <div className="pt-[24px]">
            <Projects graphic={true} />
          </div>
        </div>
      </div>
    </main>
  )
};
