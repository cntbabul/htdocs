import React from "react";
import "./Menus.css";
//export default Menus;
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <>
            <Zoom>
              <div className="navbar-profile-pic">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczONPYLvUkTUVPkho4Lb_el-L8he5U0XRUSHVjys3Y8K5AkulFOKevglt9rIt0jE6GYPimZ9s2pGlEpVvtRt-VKBGSeGj12b0ZTkNyNC5XGFOOJEyg5ABZY6h27Rm-tY5iq4gx9cWZXJMxchcEb5r7sNhQ=w794-h947-s-no-gm?authuser=0"
                  alt="profile pic"
                />
              </div>
            </Zoom>
          </>
          <>
            <Fade right>
              <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcHome size={30} />
                      Home
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcVideoProjector size={30} />
                      Projects
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcPortraitMode size={30} />
                      Work Experince
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="techstack"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcBiotech size={30} />
                      Tech Stack
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcReadingEbook size={30} />
                      Education
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcAbout size={30} />
                      About
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <FcBusinessContact size={30} />
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome size={30} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector size={30} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode size={30} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech size={30} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook size={30} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout size={30} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact size={30} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
