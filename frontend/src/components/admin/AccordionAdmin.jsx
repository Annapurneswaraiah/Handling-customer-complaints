import React from 'react';
import { Accordion, Container, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AccordionAdmin.css'; // Optional: create this file for custom styles

const AccordionAdmin = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="mt-5">
      <h3 className="text-center fw-bold mb-4" data-aos="fade-down">
        ⚙️ Admin Control Panel
      </h3>
      <Accordion defaultActiveKey="0" data-aos="zoom-in">
        {/* 1. Assign Complaints */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>🗂 Assign Complaints</Accordion.Header>
          <Accordion.Body>
            <p>Assign pending complaints to available agents with optimized workload balancing.</p>
            <Stack direction="horizontal" gap={2}>
              <Button variant="outline-primary" onClick={() => navigate('/admin/dashboard')}>
                Go to Dashboard
              </Button>
              <Button variant="success" onClick={() => navigate('/admin/agents')}>
                View Agents
              </Button>
            </Stack>
          </Accordion.Body>
        </Accordion.Item>

        {/* 2. Monitor Activity */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>📊 Monitor Activity</Accordion.Header>
          <Accordion.Body>
            <p>Track system-wide user and agent activity logs in real time.</p>
            <Button variant="outline-dark" onClick={() => navigate('/admin/home')}>
              Monitor from Admin Home
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        {/* 3. Manage Roles */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>👤 Manage Roles</Accordion.Header>
          <Accordion.Body>
            <p>Promote or demote user roles like agent or admin based on performance.</p>
            <Button variant="warning" onClick={() => navigate('/admin/users')}>
              Manage Users
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AccordionAdmin;
