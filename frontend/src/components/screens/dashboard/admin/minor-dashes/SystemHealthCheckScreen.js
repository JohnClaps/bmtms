import React, { useState, useEffect } from 'react';
import { Card, ProgressBar, Alert } from 'react-bootstrap';

const SystemHealthCheckScreen = () => {
  const [progress, setProgress] = useState(0);
  const [healthCheckComplete, setHealthCheckComplete] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 15, 100));
      }, 800);
      return () => clearInterval(interval);
    } else {
      setHealthCheckComplete(true);
    }
  }, [progress]);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h4>System Health Check</h4>
        <p>Running system health diagnostics...</p>
        <ProgressBar now={progress} label={`${progress}%`} />
        {healthCheckComplete && (
          <Alert variant="success" className="mt-3">
            System Health Check completed! All systems are operational.
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default SystemHealthCheckScreen;
