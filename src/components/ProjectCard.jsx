import { Card } from "react-bootstrap";
import { useState } from "react";

function ProjectCard (props) {
    const [expansion, setExpansion] = useState(false);

    return (
        <Card style={{height: 250, width: 350}} onClick={() => setExpansion(!expansion)}>
        <Card.Body>
            <Card.Title>{props.id}</Card.Title>
            <Card.Subtitle>{props.title}</Card.Subtitle>
            <Card.Text>{props.description}</Card.Text>
            {expansion && <Card.Text>More information about the project will go here</Card.Text>}
        </Card.Body>
        </Card>
    );
}

export default ProjectCard;