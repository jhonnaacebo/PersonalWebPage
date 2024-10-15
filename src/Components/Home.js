import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => (
  <Container>
    <h2 style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold' }}>
      Welcome to My Profile!
    </h2>
    <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
      My career goal is to become a proficient Web Developer.
    </p>
  </Container>
);

export default Home;
