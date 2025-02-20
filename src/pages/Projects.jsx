import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Projects () {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    import('../data/projectData.json')
      .then(data => setProjects(data.default))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  return (
    <div>
      {projects.map((project) => {
        return (
          <Card>
            <Card.Body>
              <Card.Title>{project.id}</Card.Title>
              <Card.Text>
                <p>{project.title}</p>
                <p>{project.description}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
