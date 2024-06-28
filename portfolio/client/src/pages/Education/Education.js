import React from "react";
import { IoSchool } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="container education">
        <h1 className="col-12 mt-3 mb-1 text-center">EDUCATION</h1>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#55b911", color: "ffcd80" }}
            contentArrowStyle={{ borderRight: "7px solid  #55b911" }}
            date="2019 - present"
            iconStyle={{ background: "#55b911", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.C.A.</h3>
            <h4 className="vertical-timeline-element-subtitle">
              KKHSOU,Guwahati
            </h4>
            <p>Bachelor in Computer Application</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#138781", color: "ffcd80" }}
            contentArrowStyle={{ borderRight: "7px solid  #13878111" }}
            date="2013 - 2017"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">D.Pharm</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Institute of Pharmacy, GMCH
            </h4>
            <p>Diploma in Pharmacy.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
