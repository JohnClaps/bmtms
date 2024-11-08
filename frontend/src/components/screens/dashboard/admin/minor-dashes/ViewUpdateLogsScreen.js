import React, { useState } from 'react';
import { Table, Button, Dropdown } from 'react-bootstrap';
import { saveAs } from 'file-saver'; // For exporting logs

const ViewUpdateLogsScreen = () => {
  // Sample log data
  const [logs] = useState([
    { timestamp: '2024-09-20 10:30', description: 'Updated software to version 1.2.1', status: 'success' },
    { timestamp: '2024-09-18 14:12', description: 'Failed to update software', status: 'failure' },
    { timestamp: '2024-09-16 09:25', description: 'Updated configuration settings', status: 'success' },
    { timestamp: '2024-09-14 16:44', description: 'Performed system health check', status: 'success' },
    { timestamp: '2024-09-12 11:17', description: 'Backup offchain data', status: 'success' },
  ]);

  const [filterStatus, setFilterStatus] = useState('all');

  // Filter logs by status
  const filteredLogs = logs.filter(log => filterStatus === 'all' || log.status === filterStatus);

  // Function to export logs to a CSV file
  const exportLogs = () => {
    const csvContent = [
      ['Timestamp', 'Description', 'Status'], // Header
      ...logs.map(log => [log.timestamp, log.description, log.status]), // Rows
    ]
      .map(row => row.join(','))
      .join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'update_logs.csv');
  };

  return (
    <div>
      <h4>View Update Logs</h4>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <Dropdown onSelect={setFilterStatus}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {filterStatus === 'all' ? 'All Logs' : `${filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)} Logs`}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="all">All Logs</Dropdown.Item>
              <Dropdown.Item eventKey="success">Success Logs</Dropdown.Item>
              <Dropdown.Item eventKey="failure">Failure Logs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Button onClick={exportLogs} variant="primary">Export Logs as CSV</Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map((log, index) => (
            <tr key={index}>
              <td>{log.timestamp}</td>
              <td>{log.description}</td>
              <td>
                <span className={`badge ${log.status === 'success' ? 'bg-success' : 'bg-danger'}`}>
                  {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewUpdateLogsScreen;
