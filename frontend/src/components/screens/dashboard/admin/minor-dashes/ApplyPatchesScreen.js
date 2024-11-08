import React, { useState } from 'react';
import { Table, Button, Form, Alert } from 'react-bootstrap';

const ApplyPatchesScreen = () => {
  // Sample patches data
  const [patches, setPatches] = useState([
    { id: 1, name: 'Security Patch 1.1', description: 'Fixes for critical security vulnerabilities.', version: '1.1', applied: false },
    { id: 2, name: 'Performance Patch 2.0', description: 'Improvements in system performance and resource management.', version: '2.0', applied: false },
    { id: 3, name: 'UI Update 3.1', description: 'Enhanced user interface for better usability.', version: '3.1', applied: false },
  ]);

  const [selectedPatches, setSelectedPatches] = useState([]);
  const [statusMessage, setStatusMessage] = useState(null);

  // Handle checkbox selection for patches
  const handlePatchSelection = (patchId) => {
    setSelectedPatches(prevSelected =>
      prevSelected.includes(patchId)
        ? prevSelected.filter(id => id !== patchId)
        : [...prevSelected, patchId]
    );
  };

  // Apply selected patches
  const applyPatches = () => {
    const updatedPatches = patches.map(patch => {
      if (selectedPatches.includes(patch.id)) {
        return { ...patch, applied: true };
      }
      return patch;
    });
    setPatches(updatedPatches);
    setStatusMessage('Patches successfully applied!');
    setSelectedPatches([]);
  };

  return (
    <div>
      <h4>Apply Software Patches</h4>
      {statusMessage && <Alert variant="success">{statusMessage}</Alert>}
      
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Select</th>
            <th>Patch Name</th>
            <th>Description</th>
            <th>Version</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patches.map(patch => (
            <tr key={patch.id}>
              <td>
                <Form.Check 
                  type="checkbox" 
                  disabled={patch.applied}
                  checked={selectedPatches.includes(patch.id)}
                  onChange={() => handlePatchSelection(patch.id)}
                />
              </td>
              <td>{patch.name}</td>
              <td>{patch.description}</td>
              <td>{patch.version}</td>
              <td>
                {patch.applied ? (
                  <span className="badge bg-success">Applied</span>
                ) : (
                  <span className="badge bg-warning">Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button 
        variant="primary" 
        disabled={selectedPatches.length === 0} 
        onClick={applyPatches}
        className="mt-3"
      >
        Apply Selected Patches
      </Button>
    </div>
  );
};

export default ApplyPatchesScreen;
