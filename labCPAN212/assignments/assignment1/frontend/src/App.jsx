import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [overview, setOverview] = useState({});
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getOverview").then(res => res.json()).then(setOverview);
    fetch("http://localhost:8000/getEdu").then(res => res.json()).then(setEducation);
    fetch("http://localhost:8000/getSkills").then(res => res.json()).then(setSkills);
    fetch("http://localhost:8000/getExp").then(res => res.json()).then(setExperience);
    fetch("http://localhost:8000/getProjects").then(res => res.json()).then(setProjects);
  }, []);

  return (
    <Container className="mt-4 resume-container">
      <Card className="p-4 text-center header-card">
        <h1 className="name">{overview.name}</h1>
        <p className="bio">{overview.bio}</p>
        <p><a href={overview.linkedin} className="link">LinkedIn</a> | {overview.email} | {overview.phone}</p>
      </Card>

      <Row className="mt-4">
        <Col>
          <Card className="p-3 section-card">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <p key={index} className="edu-text"><strong>{edu.program}</strong> - {edu.institution}, {edu.location} ({edu.gpa})</p>
            ))}
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="p-3 section-card">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => (<li key={index} className="skill-text">{skill}</li>))}
            </ul>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="p-3 section-card">
            <h3>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index}>
                <h5 className="exp-role">{exp.role} - {exp.company}</h5>
                <p className="exp-duration"><em>{exp.duration}</em></p>
                <ul className="exp-list">{exp.responsibilities.map((resp, i) => (<li key={i}>{resp}</li>))}</ul>
              </div>
            ))}
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="p-3 section-card">
            <h3>Projects</h3>
            {projects.map((proj, index) => (
              <div key={index}>
                <h5 className="project-name">{proj.name} ({proj.semester})</h5>
                <p className="project-role"><strong>Role:</strong> {proj.role}</p>
                <ul className="project-details">{proj.details.map((detail, i) => (<li key={i}>{detail}</li>))}</ul>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
