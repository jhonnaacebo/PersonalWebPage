import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
    <Container>
      <h2 style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold'}}>Contact Me</h2>
      <p style={{ fontFamily: 'Trebuchet MS', fontStyle: 'italic'}}>
        If you have any questions, feel free to reach out by filling in the form below:</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-2">
          <Form.Label style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold'}}>Name:</Form.Label>
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
          <Form.Label style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold'}}>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold'}}>Message:</Form.Label>
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
        <Button style={{ fontFamily: 'Trebuchet MS', fontWeight: 'bold'}} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
