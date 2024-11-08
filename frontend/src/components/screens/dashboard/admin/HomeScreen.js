import { Navbar, Nav, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Line, Pie } from 'react-chartjs-2'; // Assuming you're using 'react-chartjs-2' for charts
import React, { useState } from 'react';
import './styles/HomeScreen.css';

//Importing screen components
import RolyatiesPaymentScreen from './components/RolyatiesPaymentScreen';
import ReportsScreen from './components/ReportsScreen';
import UserManagementScreen from './UserManagementScreen';
import SecurityScreen from './components/SecurityScreen';
import SettingsScreen from './components/SettingsScreen';
import SupportScreen from './components/SupportScreen';
import AnalyticsScreen from './AnalyticsScreen';

const HomeScreen = () => {
  const [activeScreen, setActiveScreen] = useState('overview');

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Transaction Volume',
        data: [120, 150, 180, 200, 230, 250],
        borderColor: '#007bff',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Gold', 'Silver', 'Platinum', 'Diamond'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#ffc107', '#6c757d', '#343a40', '#007bff'],
      },
    ],
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'RolyatiesPaymentScreen':
        return <RolyatiesPaymentScreen />;
      case 'AnalyticsScreen':
        return <AnalyticsScreen/>;
      case 'ReportsScreen':
        return <ReportsScreen />;
      case 'UserManagementScreen':
        return <UserManagementScreen />
      case 'SecurityScreen':
        return <SecurityScreen />;
      case 'SettingsScreen':
        return <SettingsScreen />;
      case 'SupportScreen':
        return <SupportScreen />;
      default:
        return (
          <Container fluid className="mt-4">
            <Row className="mb-4">
              <Col md={8}>
                <h4>Overview</h4>
                <p className="text-muted">Get insights into the latest transactions and mining activities.</p>
              </Col>
              <Col md={4} className="d-flex justify-content-end align-items-center">
                <Button variant="primary" className="me-2">Submit New Transaction</Button>
                <Button variant="outline-secondary">Export Reports</Button>
              </Col>
            </Row>

            {/* Data Panels */}
            <Row>
              <Col md={6}>
                <Card className="dashboard-card shadow-sm">
                  <Card.Body>
                    <Line data={lineChartData} />
                  </Card.Body>
                </Card>
              </Col>
                    <Card.Title>Transaction Volume (Monthly)</Card.Title>
              <Col md={6}>
                <Card className="dashboard-card shadow-sm">
                  <Card.Body>
                    <Card.Title>Mineral Distribution</Card.Title>
                    <Pie data={pieChartData} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Quick Access and Recent Transactions */}
            <Row className="mt-4">
              <Col md={8}>
                <Card className="shadow-sm quick-access-card">
                  <Card.Body>
                    <Card.Title>Recent Transactions</Card.Title>
                    <ul className="transaction-list">
                      <li>Transaction #1 - Gold - 200 kg - $10,000,000</li>
                      <li>Transaction #2 - Silver - 500 kg - $20,000,000</li>
                      <li>Transaction #3 - Diamond - 50 kg - $50,000,000</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm quick-access-card">
                  <Card.Body>
                    <Card.Title>Quick Access</Card.Title>
                    <Button variant="success" className="w-100 mb-2">Submit New Report</Button>
                    <Button variant="danger" className="w-100">View Alerts</Button>
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
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={() => setActiveScreen('overview')} style={{ cursor: 'pointer' }}>
            Mining Transactions Monitor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link action onClick={() => setActiveScreen('RolyatiesPaymentScreen')}>Royalties</Nav.Link>
              <Nav.Link action onClick={()=> setActiveScreen('AnalyticsScreen')}>Analytics</Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('UserManagementScreen')}>Users</Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('ReportsScreen')}>Reports</Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('SecurityScreen')}>Security</Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('SettingsScreen')}>Settings</Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('SupportScreen')}>Support</Nav.Link>
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

export default HomeScreen;

