import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FooterC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={5}>
            <h5>ResolveNow</h5>
            <p>Your trusted complaint management solution. We ensure your concerns are heard and acted on!</p>
          </Col>

          <Col md={3}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/login" className="text-white">Login</a></li>
              <li><a href="/signup" className="text-white">Sign Up</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Chat Support</h6>
            <p>Need help? Our support team is here.</p>
            <Button variant="outline-light" size="sm" onClick={() => navigate('/chat')}>
              💬 Open Chat
            </Button>
            <hr className="bg-light mt-3" />
            <p className="mb-0">Email: support@resolvenow.com</p>
            <p>Phone: +91 9876543210</p>
          </Col>
        </Row>

        <hr />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} ResolveNow. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default FooterC;
