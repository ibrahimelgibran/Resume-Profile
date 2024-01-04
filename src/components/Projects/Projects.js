import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import personal from "../../Assets/Projects/personal.png";
import iegcode from "../../Assets/Projects/iegcode.png";
import eskamuga from "../../Assets/Projects/eskamuga.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eskamuga}
              isBlog={false}
              title="Smk Muhammadiyah Gamping"
              description="This is a CMS ESKAMUGA project that I created using PHP, Codeignither 4 and MySQL. This project consists of a website that showcases my skills, achievements, and personality."
              ghLink="#"
              demoLink="https://smksmuhammadiyahgamping.sch.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal}
              isBlog={false}
              title="Personal Portfolio"
              description="This is a personal branding project that I created using Next JS, Tailwind CSS, and Framer Motion. This project consists of a website that showcases my skills, achievements, and personality."
              ghLink="#"
              demoLink="http://ibrahimelgibran.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iegcode}
              isBlog={false}
              title="IegCode Store"
              description="This is a WebApp Busniess Tech Stack Next Js, Tailwind CSS. This project consists of a website that showcases my skills, achievements, and personality."
              ghLink="null"
              demoLink="https://www.iegcodestore.my.id/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
