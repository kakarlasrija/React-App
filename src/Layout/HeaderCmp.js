import React, { useState } from "react";
import Mypic from "../StaticFiles/Images/Srija.png";
import "./HeaderCmp.css";
import { Typewriter } from "react-simple-typewriter";

function HeaderCmp() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <>
      <section id="Home">
        <nav className="nav">
          <a href="/" className="nav__brand">
            <h1>Srija Tanniru</h1>
          </a>
          <ul className={active}>
            <li className="nav__item">
              <a href="#Home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#Skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#Project" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#Testimonials" className="nav__link">
                Testimonials
              </a>
            </li>
            <li className="nav__item">
              <a href="#About" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#Contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <div className="NavBdy">
          <div className="Frame1">
            <div className="Intro">
              <h3>WELCOME TO MY WORLD</h3>
              <h1>
                Hi, I’m <span>Srija Tanniru</span>
              </h1>
              <h2>
                a
                <span>
                  <Typewriter
                    words={[
                      " Java Developer.",
                      " React Developer.",
                      " Full Stack Developer.",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
            </div>
          </div>

          <div className="Frame2">
            <img src={Mypic} alt="MyPic"></img>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeaderCmp;
