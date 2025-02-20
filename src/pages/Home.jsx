import React, { useState } from "react";
import { Card } from "react-bootstrap";
import useTypewriter from "../custom_hooks/useTypewriter"; // Import the custom hook

export default function Home() {
  const [isFlipped, setFlipped] = useState(false);

  const fullText = ` Welcome to My Portfolio!\n\nHey there, and thanks for stopping by! I’m thrilled to have you here.
  This website is a reflection of my journey—my passion, creativity, and the projects that have shaped me along the way.
  Whether you're here to learn more about me, explore my work, or connect, I hope you find something that sparks your interest.

  🌟 About Me – Want to know who I am and what drives me? Head over to my About Me page for a glimpse into my background, skills, and interests. Just click on my photo!

  💡 Projects – This is where the magic happens! Check out some of the exciting projects I’ve worked on.

  📬 Connect – Let’s chat! Whether you have questions, opportunities, or just want to say hello, I’d love to hear from you.

  Feel free to explore, and enjoy your visit. Thanks again for being here—I hope you find inspiration, creativity, and maybe even a new connection!`;

  const typewriterText = useTypewriter(isFlipped ? fullText : " Hello There", 30);

  return (
    <Card onClick={() => setFlipped(!isFlipped)} style={{ cursor: "pointer" }}>
      <Card.Body>
        <Card.Text style={{ whiteSpace: "pre-line" }}>{typewriterText}</Card.Text>
      </Card.Body>
    </Card>
  );
}
