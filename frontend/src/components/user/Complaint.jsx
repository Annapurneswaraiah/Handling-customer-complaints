import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const Complaint = () => {
  const [complaint, setComplaint] = useState({
    name: '',
    email: '',
    complaint: ''
  });

  useEffect(() => {
    // Get name and email from localStorage (optional fallback values)
    const name = localStorage.getItem('userName') || '';
    const email = localStorage.getItem('userEmail') || '';

    setComplaint(prev => ({
      ...prev,
      name,
      email
    }));
  }, []);

  const handleChange = e =>
    setComplaint({ ...complaint, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submit', complaint);
      alert('✅ Complaint submitted successfully!');
      setComplaint(prev => ({ ...prev, complaint: '' })); // Clear only the complaint field
    } catch (err) {
      alert('❌ Error submitting complaint');
    }
  };

  return (
    <Card className="m-5 p-4 shadow-sm">
      <Card.Title>Submit Your Complaint</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={complaint.name}
            onChange={handleChange}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={complaint.email}
            onChange={handleChange}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Complaint</Form.Label>
          <Form.Control
            as="textarea"
            name="complaint"
            rows={4}
            value={complaint.complaint}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Card>
  );
};

export default Complaint;
