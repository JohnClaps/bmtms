import React, { useState } from 'react';
import { Card, Row, Col, Container, Table, Nav, Pagination } from 'react-bootstrap';
import { FaShieldAlt, FaHistory, FaUser, FaExclamationTriangle } from 'react-icons/fa';
import '../styles/SecurityScreen.css';

const SecurityScreen = () => {
  const [activeTab, setActiveTab] = useState('userLog'); // State to control active tab
  const [currentPage, setCurrentPage] = useState(1); // State to control pagination
  const alertsPerPage = 5; // Number of alerts per page

  // Sample security alerts
  const securityAlerts = [
    'Failed login attempt from IP 192.168.1.1',
    'Unusual activity detected on account admin',
    'Two-Factor Authentication enabled for user1',
    'Password changed for user2',
    'Admin account locked due to multiple failed attempts',
    'New device login for user3',
    'Suspicious IP detected: 203.0.113.5',
    'User4 added as a new admin',
    'Failed password reset attempt for user5',
    'Multiple login attempts from different locations for user6'
  ];

  // Pagination logic
  const indexOfLastAlert = currentPage * alertsPerPage;
  const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;
  const currentAlerts = securityAlerts.slice(indexOfFirstAlert, indexOfLastAlert);

  const totalPages = Math.ceil(securityAlerts.length / alertsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="security-screen">
      <Container fluid>
        <h3 className="text-center mb-4">Security Management</h3>

        {/* Horizontal Menu */}
        <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="userLog">
              <FaUser className="me-2" />
              User Log
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="historyLog">
              <FaHistory className="me-2" />
              History Log
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="auditTrail">
              <FaShieldAlt className="me-2" />
              Audit Trail
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Content based on active tab */}
        <Row className="mt-4">
          <Col>
            {activeTab === 'userLog' && (
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    <FaUser size={24} className="me-2" />
                    User Log
                  </Card.Title>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Action</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Admin</td>
                        <td>Logged in</td>
                        <td>2024-09-01</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            )}

            {activeTab === 'historyLog' && (
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    <FaHistory size={24} className="me-2" />
                    History Log
                  </Card.Title>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Event ID</th>
                        <th>User</th>
                        <th>Action</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Admin</td>
                        <td>Changed password</td>
                        <td>2024-09-02</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            )}

            {activeTab === 'auditTrail' && (
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    <FaShieldAlt size={24} className="me-2" />
                    Audit Trail
                  </Card.Title>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Event ID</th>
                        <th>User</th>
                        <th>Action</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Admin</td>
                        <td>Logged out</td>
                        <td>2024-09-03</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>

        {/* Security Alerts with Pagination */}
        <Row className="mt-4">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-danger">
                  <FaExclamationTriangle size={24} className="me-2" />
                  Recent Security Alerts
                </Card.Title>
                <ul>
                  {currentAlerts.map((alert, index) => (
                    <li key={index}>{alert}</li>
                  ))}
                </ul>
                {/* Pagination Component */}
                <Pagination>
                  {[...Array(totalPages).keys()].map((pageNumber) => (
                    <Pagination.Item
                      key={pageNumber + 1}
                      active={pageNumber + 1 === currentPage}
                      onClick={() => handlePageChange(pageNumber + 1)}
                    >
                      {pageNumber + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecurityScreen;
