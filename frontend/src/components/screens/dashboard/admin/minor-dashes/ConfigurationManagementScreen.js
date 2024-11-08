import React, { useState } from 'react';
import { Card, Alert, Button, ListGroup } from 'react-bootstrap';

const ConfigurationManagementScreen = () => {
  const [configurations] = useState([
    'MaxConnections: 1000',
    'CacheSize: 256MB',
    'LogLevel: INFO'
  ]);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleUpdate = () => {
    setUpdateSuccess(true);
    setTimeout(() => setUpdateSuccess(false), 3000);
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h4>Configuration Management</h4>
        <p>Current system configurations:</p>
        <ListGroup className="mb-3">
          {configurations.map((config, index) => (
            <ListGroup.Item key={index}>{config}</ListGroup.Item>
          ))}
        </ListGroup>
        <Button variant="primary" onClick={handleUpdate}>Update Configuration</Button>
        {updateSuccess && (
          <Alert variant="success" className="mt-3">
            Configuration updated successfully!
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default ConfigurationManagementScreen;
