import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <Container className="submission-success-container">
       <h2 className="h2">Thank you, {name}!</h2>
      <p className="p">- Your message has been sent successfully. I'll get back to you as soon as possible.</p>
      <p className="p1"><strong>Email:</strong> {email}</p>
      <p className="p1"><strong>Message:</strong> {message}</p>
    </Container>
  );
};

export default SubmissionSuccess;
