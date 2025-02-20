import { Card, Container, Row, Col, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects () {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    import('../data/projectData.json')
      .then(data => setProjects(data.default))
      .catch(error => console.error('Error loading projects:', error));
  }, []);




  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
        <Container fluid>
        <Row className="justify-content-center g-4">
              {
                projects.map(project => (
                  <Col xs={12} xl={3} lg={4} md={6} sm={12} key={project.id}>
                    <ProjectCard {...project} />
                  </Col>
                ))
              }
          </Row>
      </Container>
    </div>
  );
};
