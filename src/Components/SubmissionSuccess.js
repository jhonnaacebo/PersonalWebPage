import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <Container>
       <h2 style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold', color: 'black' }}>
      Thank you, {name}!
    </h2>
      <p style={{ fontFamily: 'Trebuchet MS' }}>- Your message has been sent successfully. I'll get back to you as soon as possible.</p>
      <p style={{ fontFamily: 'Trebuchet MS' }}><strong>Email:</strong> {email}</p>
      <p style={{ fontFamily: 'Trebuchet MS' }}><strong>Message:</strong> {message}</p>
    </Container>
  );
};

export default SubmissionSuccess;
