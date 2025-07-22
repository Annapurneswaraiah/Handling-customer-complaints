import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Card className="text-center m-5 shadow-lg">
      <Card.Body>
        <Card.Title>Welcome to ResolveNow</Card.Title>
        <Card.Text>Choose an action to continue</Card.Text>
        <Button variant="primary" className="m-2" onClick={() => navigate('/user/complaint')}>Submit Complaint</Button>
        <Button variant="success" className="m-2" onClick={() => navigate('/user/status')}>Track Status</Button>
      </Card.Body>
    </Card>
  );
};

export default HomePage;
