import React, { useState, useEffect } from 'react';
import { Card, ProgressBar, Alert } from 'react-bootstrap';

const DiagnosticsScreen = () => {
  const [progress, setProgress] = useState(0);
  const [diagnosticsComplete, setDiagnosticsComplete] = useState(false);

  // Simulate running diagnostics
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 20, 100));
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setDiagnosticsComplete(true);
    }
  }, [progress]);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h4>Diagnostics</h4>
        <p>Running system diagnostics...</p>
        <ProgressBar now={progress} label={`${progress}%`} />
        {diagnosticsComplete && (
          <Alert variant="success" className="mt-3">
            Diagnostics complete! All systems are running smoothly.
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default DiagnosticsScreen;
