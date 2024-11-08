import React, { useState } from 'react';
import { Table, Container, Row, Col, Card, Nav, Form, Button, Badge } from 'react-bootstrap';

// Sample sales data
const salesData = [
  { transactionID: 'TX123', buyer: 'John Doe', mineral: 'Gold', quantity: 100, amount: 5000, status: 'Verified' },
  { transactionID: 'TX124', buyer: 'Jane Smith', mineral: 'Copper', quantity: 200, amount: 3000, status: 'Pending' },
  { transactionID: 'TX125', buyer: 'Mike Johnson', mineral: 'Silver', quantity: 50, amount: 1500, status: 'Verified' }
];

const MineralSalesAuditScreen = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSales = salesData.filter(
    data =>
      data.transactionID.includes(searchTerm) ||
      data.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.mineral.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to render status badges
  const renderStatusBadge = (status) => {
    return status === 'Verified' ? (
      <Badge bg="success">Verified</Badge>
    ) : (
      <Badge bg="warning">Pending</Badge>
    );
  };

  // Tab content for audit overview
  const renderAuditOverview = () => (
    <Card>
      <Card.Header>Sales Audit Overview</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Buyer</th>
              <th>Mineral</th>
              <th>Quantity (kg)</th>
              <th>Amount ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((data, index) => (
              <tr key={index}>
                <td>{data.transactionID}</td>
                <td>{data.buyer}</td>
                <td>{data.mineral}</td>
                <td>{data.quantity}</td>
                <td>{data.amount}</td>
                <td>{renderStatusBadge(data.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for detailed audit
  const renderDetailedAudit = () => (
    <Card>
      <Card.Header>Detailed Sales Audit</Card.Header>
      <Card.Body>
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search by Transaction ID, Buyer, Mineral, or Status"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Buyer</th>
              <th>Mineral</th>
              <th>Quantity (kg)</th>
              <th>Amount ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.length > 0 ? (
              filteredSales.map((data, index) => (
                <tr key={index}>
                  <td>{data.transactionID}</td>
                  <td>{data.buyer}</td>
                  <td>{data.mineral}</td>
                  <td>{data.quantity}</td>
                  <td>{data.amount}</td>
                  <td>{renderStatusBadge(data.status)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No matching records found</td>
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
      <Card.Header>Generate Sales Reports</Card.Header>
      <Card.Body>
        <p>Select options below to generate reports:</p>
        <Button variant="primary" className="mt-3">Generate Verified Sales Report</Button>
        <Button variant="warning" className="mt-3 ms-2">Generate Pending Sales Report</Button>
      </Card.Body>
    </Card>
  );

  // Tab content for settings
  const renderSettings = () => (
    <Card>
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <p>Update audit settings below:</p>
        <Form>
          <Form.Group controlId="notificationEmail">
            <Form.Label>Notification Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email for notifications" />
          </Form.Group>
          <Form.Group controlId="auditThreshold">
            <Form.Label>Audit Threshold Amount ($)</Form.Label>
            <Form.Control type="number" placeholder="Enter threshold for audit alerts" />
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
        return renderAuditOverview();
      case 'detailedAudit':
        return renderDetailedAudit();
      case 'reports':
        return renderReports();
      case 'settings':
        return renderSettings();
      default:
        return renderAuditOverview();
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {/* Navigation bar */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="overview">Audit Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="detailedAudit">Detailed Audit</Nav.Link>
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
    </Container>
  );
};

export default MineralSalesAuditScreen;
