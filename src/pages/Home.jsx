import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Card } from 'react-bootstrap';

export default function Home (){
  return<Card>
      <Card.Body>
        <Card.Title>Home</Card.Title>
        <Card.Text>
          <p>Welcome to my personal website!</p>
          <p>My name is Arista and I am a Computer Science student at the University of Wisconsin-Madison.</p>
          <p>Feel free to check out my projects and connect with me!</p>
        </Card.Text>
      </Card.Body>
    </Card>
};
