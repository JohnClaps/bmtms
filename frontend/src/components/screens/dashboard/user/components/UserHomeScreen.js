import { Navbar, Nav, Container, Row, Col, Button, Card, Accordion, ListGroup, Badge } from 'react-bootstrap';
import React, { useState } from 'react';
import '../styles/UserHomeScreen.css';
import LogMineralExtraction from './LogMineralExtraction';
import AnalyticsScreen from './AnalyticsScreen.js';
import RoyaltiesScreen from './RoyaltiesScreen.js';
import ExportProcessMonitoringScreen from './ExportProcessMonitoringScreen.js';
import ChatScreen from './../../verifier/components/ChatScreen.js';
import SalesScreen from './SalesScreen.js';

const UserHomeScreen = () => {
  const [activeScreen, setActiveScreen] = useState('overview');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'LogMineralExtraction':
        return <LogMineralExtraction />;
      case 'ExportProcessMonitoringScreen':
        return <ExportProcessMonitoringScreen />;
      case 'RoyaltiesScreen':
        return <RoyaltiesScreen />;
      case 'AnalyticsScreen':
        return <AnalyticsScreen />;
      case 'ChatScreen':
        return <ChatScreen />;
      case 'SalesScreen':
        return <SalesScreen />;
      default:
        return (
          <Container fluid className="mt-5 pt-5">
            <Row className="mb-4">
              {/* Verifications Overview with Animated Counter */}
              <Col lg={6}>
                <Card className="mb-4 shadow-sm">
                  <Card.Header>Verifications Overview</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <span>Total Verifications: </span>
                      <Badge pill bg="info" className="fs-4">1,235</Badge>
                    </Card.Title>
                    <Card.Text>
                      Pending Verifications: <Badge pill bg="warning">45</Badge>
                    </Card.Text>
                    <Button variant="primary" href="#verifications">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Transactions Summary with Animated Counter */}
              <Col lg={6}>
                <Card className="mb-4 shadow-sm">
                  <Card.Header>Transactions Summary</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Total Transactions: <Badge pill bg="success">$2,456,000</Badge>
                    </Card.Title>
                    <Card.Text>
                      Last Transaction: <Badge pill bg="secondary">$34,000</Badge> on Oct 5, 2024
                    </Card.Text>
                    <Button variant="success" href="#transactions">View All Transactions</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              {/* Verifications List with Expandable Accordion */}
              <Col lg={8}>
                <Card className="mb-4 shadow-sm">
                  <Card.Header>Recent Verifications</Card.Header>
                  <Accordion defaultActiveKey="0">
                    {[1, 2, 3].map((item, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>Verification #{item}</Accordion.Header>
                        <Accordion.Body>
                          <ListGroup variant="flush">
                            <ListGroup.Item>License Number: LIC-2023{index + 10}</ListGroup.Item>
                            <ListGroup.Item>Status: {index === 0 ? 'Verified' : index === 1 ? 'Pending' : 'Rejected'}</ListGroup.Item>
                            <ListGroup.Item>Date: 2024-0{index + 5}-0{index + 1}</ListGroup.Item>
                          </ListGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                  <Button variant="primary" href="#verifications">View All Verifications</Button>
                </Card>
              </Col>

              {/* Reports Section */}
              <Col lg={4}>
                <Card className="mb-4 shadow-sm">
                  <Card.Header>Reports</Card.Header>
                  <Card.Body>
                    <p>
                      Generate detailed reports of all mining site verifications, transactions, and audits. Customize the reports based on date, license type, or transaction range.
                    </p>
                    <Button variant="dark" href="#reports">Generate Report</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              {/* Status Summaries with ListGroup */}
              <Col lg={12}>
                <Card className="mb-4 shadow-sm">
                  <Card.Header>Status Summaries</Card.Header>
                  <Card.Body>
                    <ListGroup horizontal>
                      <ListGroup.Item variant="info" className="text-center">
                        <h5>Total Transactions</h5>
                        <Badge bg="info" className="fs-5">$2,456,000</Badge>
                      </ListGroup.Item>
                      <ListGroup.Item variant="success" className="text-center">
                        <h5>Active Verifications</h5>
                        <Badge bg="success" className="fs-5">1,235</Badge>
                      </ListGroup.Item>
                      <ListGroup.Item variant="warning" className="text-center">
                        <h5>Pending Reports</h5>
                        <Badge bg="warning" className="fs-5">12</Badge>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
    }
  };

  return (
    <div className="home-screen">
      {/* Navigation Bar */}
      <Navbar bg="white" variant="white" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={() => setActiveScreen('overview')} style={{ cursor: 'pointer' }}>
            Mining Transactions Monitor
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="outline-dark" className="me-2" onClick={() => setActiveScreen('LogMineralExtraction')}>Production</Button>
              <Button variant="outline-dark" className="me-2" onClick={() => setActiveScreen('SalesScreen')}>Sales</Button>
              <Button variant="outline-dark" className="me-2" onClick={() => setActiveScreen('RoyaltiesScreen')}>Royalties</Button>
              <Button variant="outline-dark" className="me-2" onClick={() => setActiveScreen('AnalyticsScreen')}>Analytics</Button>
              <Button variant="outline-dark" className="me-2" onClick={() => setActiveScreen('ExportProcessMonitoringScreen')}>Exports</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Render the active screen */}
      <div className="content">
        {renderScreen()}
      </div>
    
    </div>
  );
};

export default UserHomeScreen;
