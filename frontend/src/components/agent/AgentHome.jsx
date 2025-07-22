import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

const AgentHome = () => {
  const [complaints, setComplaints] = useState([]);
  const agentEmail = localStorage.getItem('userEmail');
  const agentName = localStorage.getItem('userName');

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/agent-complaints?email=${agentEmail}`);
      setComplaints(res.data);
    } catch (err) {
      console.error('Error fetching complaints:', err);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/update-status/${id}`, { status: newStatus });
      fetchComplaints(); // refresh list
    } catch (err) {
      console.error('Status update failed', err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Welcome, Agent {agentName} 🕵️‍♂️</h2>

      {complaints.length === 0 ? (
        <p className="text-center">You have no assigned complaints.</p>
      ) : (
        complaints.map((c, i) => (
          <Card key={i} className="mb-3 shadow">
            <Card.Body>
              <Card.Title>{c.name}</Card.Title>
              <Card.Text><strong>Email:</strong> {c.email}</Card.Text>
              <Card.Text><strong>Complaint:</strong> {c.complaint}</Card.Text>
              <Card.Text><strong>Status:</strong> {c.status}</Card.Text>

              {c.status !== 'Resolved' && (
                <Button variant="success" onClick={() => handleStatusUpdate(c._id, 'Resolved')}>
                  Mark as Resolved
                </Button>
              )}
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default AgentHome;
