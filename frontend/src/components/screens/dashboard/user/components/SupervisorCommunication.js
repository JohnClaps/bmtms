import React, { useState } from 'react';
import { Form, Button, Container, Nav, Table, Card, ListGroup } from 'react-bootstrap';

const SupervisorCommunication = () => {
  const [activeTab, setActiveTab] = useState('sendMessage');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [isUrgent, setIsUrgent] = useState(false);

  // Handle message submission
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      content: message,
      urgent: isUrgent,
      date: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
    setMessage('');
    setIsUrgent(false);
  };

  // Handle file attachment
  const handleFileChange = (e) => {
    setAttachments([...attachments, ...Array.from(e.target.files)]);
  };

  // Render message sending form
  const renderSendMessage = () => (
    <Card>
      <Card.Header>Send Message to Supervisor</Card.Header>
      <Card.Body>
        <Form onSubmit={handleMessageSubmit}>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="attachments">
            <Form.Label>Attachments</Form.Label>
            <Form.Control type="file" multiple onChange={handleFileChange} />
          </Form.Group>

          <Form.Group controlId="urgent">
            <Form.Check
              type="checkbox"
              label="Mark as Urgent"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Render message history
  const renderMessageHistory = () => (
    <Card>
      <Card.Header>Message History</Card.Header>
      <Card.Body>
        {messages.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Message</th>
                <th>Urgent</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={index}>
                  <td>{msg.content}</td>
                  <td>{msg.urgent ? 'Yes' : 'No'}</td>
                  <td>{msg.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <ListGroup>
            <ListGroup.Item>No messages sent yet.</ListGroup.Item>
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );

  // Render notification for received messages (dummy data)
  const renderNotifications = () => (
    <Card>
      <Card.Header>Notifications</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>Supervisor has read your message dated 2024-10-01</ListGroup.Item>
          <ListGroup.Item>You have a new reply from the supervisor.</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="mt-4">
      {/* Navigation bar */}
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="sendMessage">Send Message</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="messageHistory">Message History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="notifications">Notifications</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Render content based on active tab */}
      <div className="mt-4">
        {activeTab === 'sendMessage' && renderSendMessage()}
        {activeTab === 'messageHistory' && renderMessageHistory()}
        {activeTab === 'notifications' && renderNotifications()}
      </div>
    </Container>
  );
};

export default SupervisorCommunication;
