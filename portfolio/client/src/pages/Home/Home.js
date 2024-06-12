import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid  home-container">
        <div className="container home-content" id="home-container">
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
          <div className="home-buttons">
            <button className="btn btn-hire">Hire me</button>
            <a className="btn btn-resume" href={Resume} download="babul.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
