import React from 'react'; // Importing React to use JSX and component features.
import { Container } from 'react-bootstrap'; // Importing Bootstrap's Container component for styling and layout.
import { useLocation } from 'react-router-dom'; // Importing useLocation to access the current location object, including state.

const SubmissionSuccess = () => {
  const location = useLocation(); // Using useLocation to get the current location object.
  const { name, email, message } = location.state || {}; 
  // Destructuring name, email, and message from location.state (passed from the Contact component).
  // Defaults to an empty object if location.state is undefined.

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
