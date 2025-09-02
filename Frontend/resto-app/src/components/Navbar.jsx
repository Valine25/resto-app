import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../rest_api.json";
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">ZUNGRY</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <button className="menubtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={()=> setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
}
