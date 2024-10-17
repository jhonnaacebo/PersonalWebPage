import React from 'react'; // Required for using JSX and React component features.
import { Container } from 'react-bootstrap'; // Bootstrap's Container component for responsive layout.
import './Styles.css';

const Home = () => (
  <Container className="home-container">
    <h2 className="h2">Welcome to my profile!</h2>
    <p className="p">Hello, I am Jhonna Acebo, a third-year Computer Science student 
      with a strong interest in becoming a skilled web developer. 
      While programming has been challenging for me, I am committed to improving and growing in this field. 
      My focus is on learning the fundamentals of web development and building practical skills, 
      especially in creating responsive and user-friendly websites. 
      I am motivated to keep exploring web technologies, sharpening my coding abilities, 
      and gaining hands-on experience through projects that will help me grow into a confident 
      and proficient web developer over time.</p>
  </Container>
  
);

export default Home;
