import React from 'react';
import { Container } from 'react-bootstrap';

const Skills = () => (
  <Container>
    <h2 style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold' }}>My Skills</h2>
    <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>Here are the technologies and skills I have experience with:</p>
    <ul style={{ fontFamily: 'Trebuchet MS'}}>
      <li>CSS</li>
      <li>React</li>
      <li>HTML</li>
      <li>Basic JavaScript</li>
      <li>Graphic Design</li>
      <li>Basic Java</li>
    </ul>
  </Container>
);

export default Skills;

