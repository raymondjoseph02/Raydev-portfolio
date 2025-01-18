import About from "../components/Home_ui/About";
import HeroSection from "../components/Home_ui/HeroSection";
import Nav from "../components/Nav";
import Mystory from "../components/Home_ui/Mystory";
import Projects from "../components/Home_ui/Projects";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <About />
        <Mystory />
        <Projects />
      </main>
    </>
  );
}

export default Home;
