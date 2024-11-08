import React, { useState, useEffect } from 'react';
import { Card, ProgressBar, Alert, Button } from 'react-bootstrap';

const SoftwareUpdateScreen = () => {
  const [progress, setProgress] = useState(0);
  const [updateComplete, setUpdateComplete] = useState(false);

  // Simulate software update
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 25, 100));
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setUpdateComplete(true);
    }
  }, [progress]);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h4>Software Updates</h4>
        <p>Checking and applying updates...</p>
        <ProgressBar now={progress} label={`${progress}%`} />
        {updateComplete && (
          <Alert variant="success" className="mt-3">
            Software updates completed successfully!
          </Alert>
        )}
        {!updateComplete && (
          <Button variant="danger" className="mt-3" onClick={() => setProgress(0)}>
            Retry
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default SoftwareUpdateScreen;
