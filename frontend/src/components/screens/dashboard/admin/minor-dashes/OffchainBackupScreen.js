import React, { useState, useEffect } from 'react';
import { Card, ProgressBar, Alert } from 'react-bootstrap';

const OffchainBackupScreen = () => {
  const [backupProgress, setBackupProgress] = useState(0);
  const [backupComplete, setBackupComplete] = useState(false);

  useEffect(() => {
    if (backupProgress < 100) {
      const interval = setInterval(() => {
        setBackupProgress(prev => Math.min(prev + 20, 100));
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setBackupComplete(true);
    }
  }, [backupProgress]);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h4>Offchain Data Backup</h4>
        <p>Backing up offchain data...</p>
        <ProgressBar now={backupProgress} label={`${backupProgress}%`} />
        {backupComplete && (
          <Alert variant="success" className="mt-3">
            Backup complete! All offchain data has been saved.
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default OffchainBackupScreen;
