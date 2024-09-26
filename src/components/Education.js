import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BvritIcon from "../assets/img/bvrit.jpeg"; 
import Alphores from "../assets/img/al4s.jpeg";
import JHS from "../assets/img/jhs.jpg";
const Education = () => {
  return (
    <div id="education">
    <VerticalTimeline >
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(233, 30, 99)" }}
        date="2020 - 2024"
        icon={
          <img
            src={BvritIcon}
            alt="BVRIT"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          B V RAJU INSTITUTE OF TECHNOLOGY
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-[18px]">
          B.Tech
        </h4>
        <p>Grade : 9.25 CGPA</p>
        <p>
          I earned my Bachelor's degree in Information Technology and
          Engineering from BV Raju Institute of Technology. My studies
          encompassed a diverse range of subjects crucial to the IT domain,
          including Data Structures and Algorithms,OOPS, SQL which honed my
          problem-solving skills and computational thinking.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(233, 30, 99)" }}
        date="2018 - 2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
        icon={
          <img
            src={Alphores}
            alt="BVRIT"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          ALPHORES JUNIOR COLLEGE
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-[18px]">
          TSBIE(XII) MPC
        </h4>
        <p>Grade : 98.9%</p>
        <p>
          I completed my higher secondary education at Alphores Junior College
          in Jagtial, where I pursued a rigorous curriculum in Mathematics,
          Physics, and Chemistry. 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(233, 30, 99)" }}
        date="2018"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
        icon={
          <img
            src={JHS}
            alt="JHS"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">JYOTHI HIGH SCHOOL</h3>
        <h4 className="vertical-timeline-element-subtitle">SSC (X)</h4>
        <p>Grade : 10CGPA</p>
        <p>
          I completed my primary education at Jyothi High School, Jagtial,
          where I developed a strong academic foundation.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default Education;
