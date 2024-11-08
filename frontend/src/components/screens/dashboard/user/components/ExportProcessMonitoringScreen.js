import React, { useState } from 'react';
import { Table, Container, Row, Col, Card, Form, Nav, Button, Badge } from 'react-bootstrap';
import MinFooter from './../../../../web3/logic/MinFooter';
const exportData = [
  { exportID: 'EXP001', mineral: 'Gold', quantity: 200, destination: 'USA', status: 'Cleared' },
  { exportID: 'EXP002', mineral: 'Copper', quantity: 300, destination: 'UK', status: 'Pending' },
  { exportID: 'EXP003', mineral: 'Diamond', quantity: 100, destination: 'India', status: 'Cleared' }
];

const ExportProcessMonitoringScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('exports');

  const filteredExports = exportData.filter(
    data =>
      data.exportID.includes(searchTerm) ||
      data.mineral.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStatusBadge = (status) => {
    return status === 'Cleared' ? (
      <Badge bg="success">Cleared</Badge>
    ) : (
      <Badge bg="warning">Pending</Badge>
    );
  };

  const renderExportTable = () => (
    <Card>
      <Card.Header>Export Process Monitoring</Card.Header>
      <Card.Body>
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search by Export ID, Mineral, or Status"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Export ID</th>
              <th>Mineral</th>
              <th>Quantity (kg)</th>
              <th>Destination</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredExports.length > 0 ? (
              filteredExports.map((data, index) => (
                <tr key={index}>
                  <td>{data.exportID}</td>
                  <td>{data.mineral}</td>
                  <td>{data.quantity}</td>
                  <td>{data.destination}</td>
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
        <Button variant="primary" className="mt-3">Export as CSV</Button>
        <Button variant="secondary" className="mt-3 ms-2">Export as PDF</Button>
      </Card.Body>
    </Card>
  );

  const renderImportTable = () => (
    <Card>
      <Card.Header>Import Process Monitoring</Card.Header>
      <Card.Body>
        {/* Import table structure */}
        <p>Import data will be displayed here...</p>
      </Card.Body>
    </Card>
  );

  const renderReportsSection = () => (
    <Card>
      <Card.Header>Reports</Card.Header>
      <Card.Body>
        {/* Report generation options */}
        <p>Reports will be displayed here...</p>
      </Card.Body>
    </Card>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'exports':
        return renderExportTable();
      case 'imports':
        return renderImportTable();
      case 'reports':
        return renderReportsSection();
      default:
        return renderExportTable();
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {/* Navigation bar for different sections */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="exports">Exports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="imports">Imports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reports">Reports</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {/* Content rendering based on active tab */}
          {renderContent()}
        </Col>
      </Row>
      <MinFooter/>
    </Container>
  );
};

export default ExportProcessMonitoringScreen;
