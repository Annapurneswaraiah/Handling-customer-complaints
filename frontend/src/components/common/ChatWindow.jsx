import React, { useState } from 'react';
import { Card, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Agent will respond soon...', sender: 'agent' }]);
      }, 1000);
    }
  };

  return (
    <Card className="shadow-lg m-4 p-3 rounded chat-card" style={{ maxWidth: '500px', margin: 'auto' }}>
      <Card.Body>
        <Card.Title className="text-center text-primary">💬 Chat Support</Card.Title>
        <ListGroup className="chat-box mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <ListGroup.Item
              key={index}
              className={`text-white ${msg.sender === 'user' ? 'bg-info' : 'bg-success'} mb-1 rounded`}
              style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}
            >
              {msg.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Form.Group className="d-flex">
          <Form.Control
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="primary" className="ms-2" onClick={handleSend}>Send</Button>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default ChatWindow;
