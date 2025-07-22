import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const Status = () => {
  const [email, setEmail] = useState('');
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);

  // Auto-fetch email from localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  // Fetch complaints
  const fetchComplaints = async () => {
    if (!email) return;
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/my-complaints?email=${email}`);
      setComplaints(res.data);
    } catch (err) {
      console.error('Error fetching complaints:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) fetchComplaints();
  }, [email]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">📌 Your Complaint Status</h2>

      {email ? (
        <>
          <div className="text-center mb-3">
            <p><strong>Email:</strong> {email}</p>
            <Button onClick={fetchComplaints} variant="primary" size="sm">
              🔄 Refresh Complaints
            </Button>
          </div>

          <Row>
            {complaints.length > 0 ? (
              complaints.map((c, idx) => (
                <Col md={6} key={idx}>
                  <Card className="mb-3 shadow-sm">
                    <Card.Body>
                      <Card.Title>{c.name}</Card.Title>
                      <Card.Text><strong>Complaint:</strong> {c.complaint}</Card.Text>
                      <Card.Text><strong>Status:</strong> {c.status || 'Pending'}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Alert variant="info" className="text-center">No complaints found yet.</Alert>
            )}
          </Row>
        </>
      ) : (
        <Alert variant="warning" className="text-center">
          You must be logged in to view your complaints.
        </Alert>
      )}
    </Container>
  );
};

export default Status;
