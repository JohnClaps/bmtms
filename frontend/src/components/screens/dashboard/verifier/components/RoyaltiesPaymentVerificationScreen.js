import React, { useState } from 'react';
import { Table, Container, Row, Col, Card, Nav, Form, Button, Badge } from 'react-bootstrap';
import MinFooter from './../../../../web3/logic/MinFooter';

// Sample royalties data
const royaltiesData = [
  { minerID: '001', mineral: 'Gold', amountDue: 1500, amountPaid: 1500, status: 'Paid' },
  { minerID: '002', mineral: 'Copper', amountDue: 1000, amountPaid: 900, status: 'Pending' },
  { minerID: '003', mineral: 'Diamond', amountDue: 2000, amountPaid: 2000, status: 'Paid' }
];

const RoyaltiesPaymentVerificationScreen = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoyalties = royaltiesData.filter(
    data =>
      data.minerID.includes(searchTerm) ||
      data.mineral.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to render status badges
  const renderStatusBadge = (status) => {
    return status === 'Paid' ? (
      <Badge bg="success">Paid</Badge>
    ) : (
      <Badge bg="warning">Pending</Badge>
    );
  };

  // Tab content for royalties overview
  const renderRoyaltiesOverview = () => (
    <Card>
      <Card.Header>Royalties Payment Overview</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Miner ID</th>
              <th>Mineral</th>
              <th>Amount Due ($)</th>
              <th>Amount Paid ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {royaltiesData.map((data, index) => (
              <tr key={index}>
                <td>{data.minerID}</td>
                <td>{data.mineral}</td>
                <td>{data.amountDue}</td>
                <td>{data.amountPaid}</td>
                <td>{renderStatusBadge(data.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for payment verification
  const renderVerification = () => (
    <Card>
      <Card.Header>Verify Payment</Card.Header>
      <Card.Body>
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search by Miner ID, Mineral, or Status"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Miner ID</th>
              <th>Mineral</th>
              <th>Amount Due ($)</th>
              <th>Amount Paid ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoyalties.length > 0 ? (
              filteredRoyalties.map((data, index) => (
                <tr key={index}>
                  <td>{data.minerID}</td>
                  <td>{data.mineral}</td>
                  <td>{data.amountDue}</td>
                  <td>{data.amountPaid}</td>
                  <td>{renderStatusBadge(data.status)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No matching records found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for generating reports
  const renderReports = () => (
    <Card>
      <Card.Header>Generate Reports</Card.Header>
      <Card.Body>
        <p>Select options below to generate reports on payment statuses:</p>
        <Button variant="primary" className="mt-3">Generate Paid Reports</Button>
        <Button variant="warning" className="mt-3 ms-2">Generate Pending Reports</Button>
      </Card.Body>
    </Card>
  );

  // Tab content for settings
  const renderSettings = () => (
    <Card>
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <p>Update notification preferences and royalty percentages below:</p>
        <Form>
          <Form.Group controlId="notificationEmail">
            <Form.Label>Notification Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email for notifications" />
          </Form.Group>
          <Form.Group controlId="royaltyPercentage">
            <Form.Label>Royalty Percentage</Form.Label>
            <Form.Control type="number" placeholder="Enter default royalty percentage" />
          </Form.Group>
          <Button variant="success" className="mt-3">Save Changes</Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderRoyaltiesOverview();
      case 'verification':
        return renderVerification();
      case 'reports':
        return renderReports();
      case 'settings':
        return renderSettings();
      default:
        return renderRoyaltiesOverview();
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {/* Navigation bar */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="overview">Royalties Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="verification">Payment Verification</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reports">Reports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings">Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {/* Render content based on active tab */}
          {renderContent()}
        </Col>
      </Row>
      <MinFooter/>
    </Container>
  );
};

export default RoyaltiesPaymentVerificationScreen;
