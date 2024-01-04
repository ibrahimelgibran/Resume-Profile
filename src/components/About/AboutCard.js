import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ibrahim El Gibran </span>
            from <span className="purple"> Yogyakarta, Indonesia.</span>
            <br />
            I am currently employed as a software developer at Sleman.
            <br />
            Saat ini saya bekerja sebagai software developer di Jogja. Saya
            telah menyelesaikan WebApp CMS Scholl Smk Muhammadiyah Gamping
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Food
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ibrahim El Gibran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
