import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill, BsWhatsapp } from "react-icons/bs";
import { Fade } from "react-reveal";
// import { FaSquareWhatsapp } from "react-icons/fa6";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid  home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content" id="home-container">
          <Fade right>
            <h2> Hi 👋 I'm Babul, a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "MERN Developer ! !",
                    "Equity Trader & Investor ! !",
                    "Freelancer ! !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <div className="home-buttons">
            <Fade left>
              <a className="btn btn-resume" href={Resume} download="babul.pdf">
                Download Resume
              </a>
            </Fade>
            <Fade right>
              {/* <button className="btn btn-hire">Hire me</button> */}
              <a className="btn btn-hire" href="https://wa.me/+91-9707073571">
                <BsWhatsapp size={30} color={"green"} /> &nbsp; Hire Me
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
