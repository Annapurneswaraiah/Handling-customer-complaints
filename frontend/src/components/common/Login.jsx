import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', formData);

      // ✅ Check if userType is returned
      if (!res.data.userType) {
        alert("Login failed: userType not found.");
        return;
      }

      alert(res.data.message);

      // ✅ Save correct values to localStorage
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userType', res.data.userType);
      localStorage.setItem('userName', res.data.name);

      // ✅ Redirect based on userType
      const userType = res.data.userType;
      if (userType === 'admin') {
        navigate('/admin/accordion');
      } else if (userType === 'agent') {
        navigate('/agent/home');
      } else {
        navigate('/user/home');
      }

    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: '25rem' }}>
        <Card.Title className="text-center mb-3">Login</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Login</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
