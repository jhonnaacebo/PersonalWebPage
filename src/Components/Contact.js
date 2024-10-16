import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/submission-success', { state: formData });
  };

  return (
    <Container className="contact-container">
      <h2 className="h2">Contact Me</h2>
      <ul className="contact-list">
        <li>Email: jhonnaacebo4@gmail.com | acebojhonna72@gmail.com</li>
        <li>Phone Number: +63 915 019 4457</li>
      </ul>
      <p className="p">If you have any questions, feel free to send your messages by filling in the form below:</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-2">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            formSize="sm"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your message here..."
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
