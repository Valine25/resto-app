import { Link } from "react-scroll";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food</p>
          </div>
          <p className="mid">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium quos aut deleniti adipisci natus corrupti ipsam non
            obcaecati numquam tenetur officiis, animi, dignissimos quibusdam
            fugiat culpa quis at. Voluptatum sunt dignissimos eius, nostrum
            corporis ad facere? Iusto accusantium tempora facere, dolorum
            facilis voluptatum sequi itaque officia ipsa! Maxime, ducimus omnis.
          </p>
          <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/> </span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about"  />
        </div>
      </div>
    </section>
  );
}
