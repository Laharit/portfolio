import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import todosimg from "../assets/img/Todos.png";
import ehrimg from "../assets/img/ehr.png";
export const Projects = () => {

  const projects = [
    {
      title: "Portfolio",
      description: "React",
      imgUrl: ehrimg,
    },
    {
      
      title: "Electronic Health Record",
      description: "Python, SHA",
      imgUrl: ehrimg,
    },
    {
      title: "Todos",
      description: "HTML, CSS, JS",
      imgUrl: todosimg,
    },
    {
      title: "Smart Wrist Band for Women",
      description: "IoT",
      imgUrl: todosimg,
    },
   
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
             <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Hi"></img>
    </section>
  )
}
