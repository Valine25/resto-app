import About from "../components/About";
import Footer from "../components/footer";
import HeroSection from "../components/Herosection";
import Menu from "../components/Menu";
import Qualities from "../components/Qualities";
import Reservation from "../components/reservation";
import Services from "../components/Services";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Services/>
      <Team/>
      <Reservation/>
      <Footer/>
    </>
  );
}
