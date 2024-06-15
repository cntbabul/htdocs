import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import { Fade } from "react-reveal";
const Teckstack = () => {
  return (
    <>
      <div className="container techstack">
        <h1 className="col-12 mt-3 mb-1 text-center">TECHNOLOGIES STACK</h1>
        <hr />
        <p className="pb-3 text-center">
          I have worked with the following technologies in my projects.
        </p>

        <div className="row">
          <Fade right>
            {TechstackList.map((tech) => (
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Teckstack;
