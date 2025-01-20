import About from "../components/Home_ui/About";
import HeroSection from "../components/Home_ui/HeroSection";
import Nav from "../components/global_ui/Nav";
import Mystory from "../components/Home_ui/Mystory";
import Projects from "../components/Home_ui/Projects";
import Contact from "../components/Home_ui/Contact";
import Footer from "../components/global_ui/Footer";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <About />
        <Mystory />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
