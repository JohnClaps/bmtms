import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopStats from './analy-components/TopStats';
import Charts from './analy-components/Charts';
import Calendar from './analy-components/Calendar';
import Map from './analy-components/Map';
import LineChart from './analy-components/LineChart';
import PieChart from './analy-components/PieChart';
import MinFooter from './../../../../web3/logic/MinFooter';
import './../styles/AnalyticsScreen.css'; // Custom CSS for the screen

function AnalyticsScreen() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar content goes here */}
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        <Container fluid className="p-4">

          {/* Top Stats and Charts */}
          <Row className="mb-4">
            <Col md={12}>
              <TopStats />
            </Col>
          </Row>
          
          <Row className="mb-4">
            <Col md={6}>
              <Charts />
            </Col>
            <Col md={6}>
              <PieChart />
            </Col>
          </Row>

          {/* Calendar, Map, and Line Chart */}
          <Row className="mb-4">
            <Col md={4}>
              <Calendar />
            </Col>
            <Col md={4}>
              <Map />
            </Col>
            <Col md={4}>
              <LineChart />
            </Col>
          </Row>

        </Container>
      </div>
      <footer>
      <MinFooter />

    </footer>
    </div>
  );
}

export default AnalyticsScreen;
