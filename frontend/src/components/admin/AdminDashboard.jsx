import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch complaints
    axios.get('http://localhost:5000/all-complaints')
      .then(res => setComplaints(res.data))
      .catch(err => console.error(err));

    // Fetch agents
    axios.get('http://localhost:5000/all-agents')
      .then(res => setAgents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users Complaints</h2>
      {complaints.length > 0 ? complaints.map((c, index) => (
        <div key={index} className="card p-3 mb-3">
          <p><strong>Name:</strong> {c.name}</p>
          <p><strong>Email:</strong> {c.email}</p>
          <p><strong>Complaint:</strong> {c.complaint}</p>
          <p><strong>Status:</strong> {c.status || 'Pending'}</p>
          <select className="form-select">
            <option>Assign</option>
            {agents.map((a, i) => (
              <option key={i}>{a.name}</option>
            ))}
          </select>
        </div>
      )) : <p>No Complaints found.</p>}

      <h2>Agents</h2>
      {agents.length === 0 ? (
        <p>No Agents to show</p>
      ) : (
        agents.map((agent, index) => (
          <div key={index}>{agent.name}</div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
