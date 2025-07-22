import React from 'react';
import { Table, Container } from 'react-bootstrap';

const AgentInfo = () => {
  const dummyAgents = [
    { name: 'Sarah', email: 'sarah@example.com', status: 'Active' },
    { name: 'David', email: 'david@example.com', status: 'Inactive' },
  ];

  return (
    <Container className="mt-5">
      <h3>Agent Details</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyAgents.map((agent, i) => (
            <tr key={i}>
              <td>{agent.name}</td>
              <td>{agent.email}</td>
              <td>{agent.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AgentInfo;
