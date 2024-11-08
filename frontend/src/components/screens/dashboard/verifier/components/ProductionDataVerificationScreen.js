import React, { useState } from 'react';
import { Table, Button, Container, Row, Col, Card, Nav, Form, Badge } from 'react-bootstrap';
import MinFooter from './../../../../web3/logic/MinFooter';
const ProductionVerificationScreen = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productionData, setProductionData] = useState([
    { minerID: '001', mineral: 'Gold', quantity: 500, status: 'Pending' },
    { minerID: '002', mineral: 'Copper', quantity: 300, status: 'Pending' },
    { minerID: '003', mineral: 'Silver', quantity: 150, status: 'Verified' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const verifyData = (index) => {
    const newData = [...productionData];
    newData[index].status = 'Verified';
    setProductionData(newData);
  };

  const filteredData = productionData.filter(
    data =>
      data.minerID.includes(searchTerm) ||
      data.mineral.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStatusBadge = (status) => {
    return status === 'Verified' ? (
      <Badge bg="success">Verified</Badge>
    ) : (
      <Badge bg="warning">Pending</Badge>
    );
  };

  // Tab content for Overview
  const renderOverview = () => (
    <Card>
      <Card.Header>Production Data Overview</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Miner ID</th>
              <th>Mineral</th>
              <th>Quantity (kg)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {productionData.map((data, index) => (
              <tr key={index}>
                <td>{data.minerID}</td>
                <td>{data.mineral}</td>
                <td>{data.quantity}</td>
                <td>{renderStatusBadge(data.status)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for Verify Production
  const renderVerifyProduction = () => (
    <Card>
      <Card.Header>Production Data Verification</Card.Header>
      <Card.Body>
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search by Miner ID or Mineral"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Miner ID</th>
              <th>Mineral</th>
              <th>Quantity (kg)</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <tr key={index}>
                  <td>{data.minerID}</td>
                  <td>{data.mineral}</td>
                  <td>{data.quantity}</td>
                  <td>{renderStatusBadge(data.status)}</td>
                  <td>
                    {data.status === 'Pending' && (
                      <Button variant="success" onClick={() => verifyData(index)}>
                        Verify
                      </Button>
                    )}
                  </td>
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
      <MinFooter/>
    </Card>
  );

  // Tab content for generating reports
  const renderReports = () => (
    <Card>
      <Card.Header>Generate Production Reports</Card.Header>
      <Card.Body>
        <Button variant="primary" className="mt-3">Generate Verified Production Report</Button>
        <Button variant="warning" className="mt-3 ms-2">Generate Pending Production Report</Button>
      </Card.Body>
    </Card>
  );

  // Tab content for Settings
  const renderSettings = () => (
    <Card>
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="autoVerification">
            <Form.Check type="checkbox" label="Enable automatic verification for quantities above 100kg" />
          </Form.Group>
          <Button variant="success" className="mt-3">Save Settings</Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'verify':
        return renderVerifyProduction();
      case 'reports':
        return renderReports();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {/* Navigation bar */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="overview">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="verify">Verify Production</Nav.Link>
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

export default ProductionVerificationScreen;
