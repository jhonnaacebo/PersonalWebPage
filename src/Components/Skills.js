import React from 'react';
import { Container } from 'react-bootstrap';
import './Styles.css';

const Skills = () => (
  <Container className="skills-container">
    <h2 className="h2">My Skills</h2>
    <p className="p">Here are the technologies and skills I have experience with:</p>
    <ul className="skills-list">
      <li>CSS</li>
      <li>React</li>
      <li>HTML</li>
      <li>JavaScript</li>
      <li>Graphic Design</li>
      <li>Java</li>
      <li>Blender</li>
      <li>Git</li>
    </ul>
  </Container>
);

export default Skills;
