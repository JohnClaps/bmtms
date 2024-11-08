import React, { useState, useEffect } from 'react';
import { Card, Alert, Button, ListGroup } from 'react-bootstrap';

const HardwareInspectionScreen = () => {
  const [inspectionComplete, setInspectionComplete] = useState(false);
  const [issuesFound, setIssuesFound] = useState(['Loose connection in GPU', 'Overheating detected']);

  useEffect(() => {
    setTimeout(() => setInspectionComplete(true), 2000);
  }, []);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h4>Hardware Inspection</h4>
        <p>Running hardware inspection...</p>
        {inspectionComplete ? (
          <>
            {issuesFound.length > 0 ? (
              <Alert variant="warning">
                Issues detected:
                <ListGroup>
                  {issuesFound.map((issue, index) => (
                    <ListGroup.Item key={index}>{issue}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Alert>
            ) : (
              <Alert variant="success">All hardware components are functioning properly!</Alert>
            )}
            <Button variant="primary" onClick={() => setIssuesFound([])}>
              Fix Issues
            </Button>
          </>
        ) : (
          <Alert variant="info">Inspecting hardware components...</Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default HardwareInspectionScreen;
