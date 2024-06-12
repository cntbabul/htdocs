import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container projects">
        <h1 className="col-12 mt-3 mb-1 text-center">RECENT PROJECTS</h1>
        <hr />
        <p className="pb-3 text-center">
          Here are some of the projects I have worked on with source code link.
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <span className="card-notify-badge">Full Stack</span>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/191/708/small_2x/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg"
                alt="project-thumbnail"
              />

              <div className="card-image-overlay m-auto mt-1">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Blood Bank App</h5>
                </div>
                <a className="ad-btn" href="#">
                  view
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <span className="card-notify-badge">Full Stack</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngjGHHVaerzfWBP6-3O8FjanJXypimxMmxiOFHGE-IkgQcGS5W7_wH4LW7ANfa7t5gVE&usqp=CAU"
                alt="project-thumbnail"
              />

              <div className="card-image-overlay m-auto mt-1">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Portfolio</h5>
                </div>
                <a className="ad-btn" href="#">
                  view
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="card rounded">
              <span className="card-notify-badge">Frontend</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWpIq1c8BqU6NwNpAtHlFWlxuKRNLpxs22Q&s"
                height={"210px"}
                alt="project-thumbnail"
              />

              <div className="card-image-overlay m-auto mt-1">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">PHP</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">College Portal</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/cntbabul/htdocs/tree/b1f1925014e1375cdd4554b6502cda95dd3a0b66/kkhsou_project"
                >
                  view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
