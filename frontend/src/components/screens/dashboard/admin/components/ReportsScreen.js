import React, { useState } from 'react';
import { Card, Row, Col, Container, Form, Button, Table } from 'react-bootstrap';
import { FaDownload, FaFilter, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';
// import './ReportsScreen.css'; // Assuming you have a CSS file for custom styles

const ReportsScreen = () => {
  const [dateRange, setDateRange] = useState('last30days');
  const [reportType, setReportType] = useState('all');

  const handleFilterChange = (event) => {
    setDateRange(event.target.value);
  };

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  return (
    <div className="reports-screen">
      <Container fluid>
        <h3 className="text-center mb-4">System Reports</h3>
        
        {/* Filters and Actions */}
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group>
              <Form.Label><FaCalendarAlt size={20} className="me-2" /> Date Range</Form.Label>
              <Form.Control as="select" value={dateRange} onChange={handleFilterChange}>
                <option value="last7days">Last 7 Days</option>
                <option value="last30days">Last 30 Days</option>
                <option value="last90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label><FaFilter size={20} className="me-2" /> Report Type</Form.Label>
              <Form.Control as="select" value={reportType} onChange={handleReportTypeChange}>
                <option value="all">All Reports</option>
                <option value="financial">Financial</option>
                <option value="operational">Operational</option>
                <option value="compliance">Compliance</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4} className="d-flex align-items-end">
            <Button variant="primary" className="me-2"><FaDownload size={20} /> Download Report</Button>
          </Col>
        </Row>

        {/* Report Table */}
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaFileAlt size={24} className="me-2" />
                  Report Details
                </Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Report Name</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with dynamic data */}
                    <tr>
                      <td>1</td>
                      <td>Monthly Financial Report</td>
                      <td>2024-09-01</td>
                      <td>Financial</td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Quarterly Operational Report</td>
                      <td>2024-09-01</td>
                      <td>Operational</td>
                      <td>In Progress</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Annual Compliance Report</td>
                      <td>2024-09-01</td>
                      <td>Compliance</td>
                      <td>Completed</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReportsScreen;
