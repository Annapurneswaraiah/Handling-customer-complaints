import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className="about-container py-5">
      <h2 className="text-center mb-4">About ResolveNow</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm bg-light">
            <Card.Body>
              <Card.Text>
                ResolveNow is an innovative online complaint registration and management platform
                designed to make grievance redressal effortless. Whether you're a customer with a
                product issue or an administrator managing incoming complaints, our system ensures
                smooth communication, real-time updates, and prompt resolution.
              </Card.Text>
              <Card.Text>
                Built with modern technologies including React, Express, MongoDB, and enhanced UI
                libraries like Bootstrap, our platform ensures security, speed, and seamless usability
                for users, agents, and admins alike.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
