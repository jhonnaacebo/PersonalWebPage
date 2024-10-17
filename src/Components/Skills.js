import React from 'react'; // Required for using JSX and React component features.
import { Container } from 'react-bootstrap'; // Bootstrap's Container component for responsive layout.
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
