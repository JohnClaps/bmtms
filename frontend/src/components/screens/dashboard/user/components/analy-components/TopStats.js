import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

const TopStats = () => {
  return (
    <Row className="mb-4">
      <Col md={3}>
        <Card className="bg-warning text-center">
          <Card.Body>
            <h6>Total</h6>
            <h4>34,560</h4>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="bg-primary text-center text-white">
          <Card.Body>
            <h6>Registered</h6>
            <h4>134</h4>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="bg-success text-center text-white">
          <Card.Body>
            <h6>Enrollment</h6>
            <h4>1,5876</h4>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="bg-info text-center text-white">
          <Card.Body>
            <h6>Reserve Estimates</h6>
            <h4>100</h4>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TopStats;
