import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import MinFooter from '../../../../web3/logic/MinFooter';

const RoyaltiesScreen = () => {
  const [scanStatus, setScanStatus] = useState("Not Started");
  const [timeInterval, setTimeInterval] = useState("Monthly");
  const [ratesStatus, setRatesStatus] = useState("Not Fetched");
  const [royaltyAmount, setRoyaltyAmount] = useState(null);
  const [hashStatus, setHashStatus] = useState("Not Stored");
  const [submissionStatus, setSubmissionStatus] = useState("Not Submitted");

  const handleRescan = () => {
    // Simulate scanning production data
    setScanStatus("Successful");
  };

  const handleFetchRates = () => {
    // Simulate fetching latest rates
    setRatesStatus("Fetched on " + new Date().toLocaleString());
  };

  const handleCalculateRoyalty = () => {
    // Simulate royalty calculation
    setRoyaltyAmount(1000); // Placeholder value
  };

  const handleStoreOnIPFS = () => {
    // Simulate storing on IPFS
    setHashStatus("Hash stored on IPFS");
  };

  const handleSubmitRoyalty = () => {
    // Simulate royalty submission
    setSubmissionStatus("Submitted Successfully");
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Royalties</h2>
        </Col>
      </Row>

      {/* Production Data Scan Section */}
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Automated Production Data Scan</Card.Title>
              <Button variant="primary" onClick={handleRescan}>Rescan Database</Button>
              <Alert variant={scanStatus === "Successful" ? "success" : "warning"} className="mt-3">
                Latest Production Data Scan Status: {scanStatus}
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Set Time Interval Section */}
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Set Time Interval</Card.Title>
              <Form>
                <Form.Group controlId="timeIntervalSelect">
                  <Form.Label>Select Time Interval</Form.Label>
                  <Form.Control as="select" value={timeInterval} onChange={(e) => setTimeInterval(e.target.value)}>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </Form.Control>
                </Form.Group>
                <Alert variant="info" className="mt-3">Current Interval Set to: {timeInterval}</Alert>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Fetch Rates Section */}
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Fetch Latest Rates</Card.Title>
              <Alert variant="info" className="mt-3">Latest Rates: {ratesStatus}</Alert>
              <Button variant="primary" onClick={handleFetchRates}>Fetch Latest Rates</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Calculate Royalty Section */}
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Calculate Royalty</Card.Title>
              <Button variant="primary" onClick={handleCalculateRoyalty}>Calculate Royalty</Button>
              {royaltyAmount && (
                <Alert variant="success" className="mt-3">
                  Royalty Calculated: ${royaltyAmount}
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Store on IPFS Section */}
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Store on IPFS</Card.Title>
              <Button variant="primary" onClick={handleStoreOnIPFS}>Store on IPFS</Button>
              <Alert variant={hashStatus === "Hash stored on IPFS" ? "success" : "warning"} className="mt-3">
                {hashStatus}
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Submission Section */}
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Submit Royalty</Card.Title>
              <Button variant="primary" onClick={handleSubmitRoyalty}>Submit to Government</Button>
              <Alert variant={submissionStatus === "Submitted Successfully" ? "success" : "warning"} className="mt-3">
                {submissionStatus}
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MinFooter/>
    </Container>
  );
};

export default RoyaltiesScreen;
