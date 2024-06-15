import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Fade } from "react-reveal";

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
          {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </div>
        <div className="container home-content" id="home-container">
          <Fade right>
            <h2> Hi 👋 I'm Babul, a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack(MERN) Developer ! !",
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
              <button className="btn btn-hire">Hire me</button>
            </Fade>
            <Fade right>
              <a className="btn btn-resume" href={Resume} download="babul.pdf">
                My Resume
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
