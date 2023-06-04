import HomeContainer from "./components/Home/HomeContainer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <HomeContainer />
      <Projects web={true} />
    </main>
  )
};
