import React, { useState } from 'react'; // Importing React and useState hook for managing state.
import { Container, Form, Button } from 'react-bootstrap'; // Importing Bootstrap components for styling the form.
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for programmatic navigation between routes.
import './Styles.css'; // Importing custom styles specific to this component.

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); 
  // useState initializes formData with empty strings for name, email, and message.

  const navigate = useNavigate(); // Initializing navigate function for routing.

  const handleChange = (e) => {
    // Function to handle changes in form inputs.
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
    // Updates the formData state with the new value for the corresponding input field.
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior.
    navigate('/submission-success', { state: formData }); 
    // Navigates to the submission success page and passes formData as state.
  };

  return (
    <Container className="contact-container">
      <h2 className="h2">Contact Me</h2>
      <ul className="contact-list">
        <li>Email: jhonnaacebo4@gmail.com | acebojhonna72@gmail.com</li>
        <li>Phone Number: +63 915 019 4457</li>
      </ul>
      <p className="p">If you have any questions, feel free to send your messages by filling in the form below:</p>
      <Form onSubmit={handleSubmit}> {/* Form element that triggers handleSubmit on submission. */}
        <Form.Group controlId="formName" className="mb-2"> {/* Grouping form elements for styling. */}
          <Form.Label>Name:</Form.Label>
          <Form.Control
            formSize="sm"
            type="text"
            name="name"
            value={formData.name} // Binding input value to formData state.
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email} // Binding input value to formData state.
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
            value={formData.message} // Binding input value to formData state.
            onChange={handleChange}
            required // Input is mandatory.
            placeholder="Type your message here..."
          />
        </Form.Group>
        <Button variant="primary" type="submit"> {/* Submit button for the form. */}
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
