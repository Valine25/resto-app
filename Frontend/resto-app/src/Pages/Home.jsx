import About from "../components/About";
import HeroSection from "../components/Herosection";
import Menu from "../components/Menu";
import Qualities from "../components/Qualities";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Services/>
    </>
  );
}
