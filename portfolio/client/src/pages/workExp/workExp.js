import React from "react";
import "./workExp.css";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  return (
    <>
      <div className="work">
        <div className="container work-exp">
          <h1 className="col-12 mt-3 mb-1 text-center">WORK EXPERIENCE</h1>
          <hr />
          <p className="pb-3 text-center">
            This are the Places I have worked in last few Years.
          </p>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#55b911", color: "ffcd80" }}
              contentArrowStyle={{ borderRight: "7px solid  #55b911" }}
              date=" April, 2021 - Dec, 2023"
              iconStyle={{ background: "#55b911", color: "#fff" }}
              icon={<BsPersonWorkspace />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Pharmacist
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Hospital Pharmacy
              </h4>
              <p>Tata 1MG Healthcare Solutions Pvt.Ltd.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "ffcd80" }}
              contentArrowStyle={{ borderRight: "7px solid  #13878111" }}
              date="Nov, 2020 - April, 2021"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<BsPersonWorkspace />}
            >
              <h3 className="vertical-timeline-element-title">
                Sn. Pharmacist
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Retail Pharmacy
              </h4>
              <p> Reliance Retail Pvt. Ltd.,(Nedtmeds)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#55b911", color: "ffcd80" }}
              contentArrowStyle={{ borderRight: "7px solid  #55b911" }}
              date="April, 2018 - Sept, 2020"
              iconStyle={{ background: "#55b911", color: "#fff" }}
              icon={<BsPersonWorkspace />}
            >
              <h3 className="vertical-timeline-element-title">Pharmacist</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Hospital/Community Pharmacy
              </h4>
              <p>Tyroon Tea Company Pvt. Ltd.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "ffcd80" }}
              contentArrowStyle={{ borderRight: "7px solid  #13878111" }}
              date="June, 2017 - March, 2018"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<BsPersonWorkspace />}
            >
              <h3 className="vertical-timeline-element-title">Pharmacist</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Retail Pharmacy
              </h4>
              <p> M/S Abedin Pharmacy.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
