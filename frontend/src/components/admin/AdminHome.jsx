import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';

const AdminHome = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/all-complaints')
      .then(res => setComplaints(res.data))
      .catch(err => console.error('Error fetching complaints:', err));
  }, []);

  return (
    <Container>
      <h2 className="my-4 text-center">📋 All Complaints</h2>
      <Row>
        {complaints.map((c, idx) => (
          <Col md={6} key={idx}>
            <Card className="mb-3 shadow-sm border-primary">
              <Card.Body>
                <Card.Title>{c.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{c.email}</Card.Subtitle>
                <Card.Text>{c.complaint}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminHome;
