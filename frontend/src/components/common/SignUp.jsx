import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '', // 🚨 Make it empty to force selection
  });

  const navigate = useNavigate();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', formData);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error === 'User already exists') {
        alert('⚠️ User already exists. Please login to register complaint.');
        navigate('/login');
      } else {
        alert('Signup failed. Please try again.');
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: '25rem' }}>
        <Card.Title className="text-center mb-3">Sign Up</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>User Type</Form.Label>
            <Form.Select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select user type</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="agent">Agent</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="success" className="w-100">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignUp;
