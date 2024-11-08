  import React, { useState } from 'react';
  import { Card, Container, Nav, Button, ListGroup } from 'react-bootstrap';
  import { FaTools, FaWrench, FaHammer, FaCog, FaCheckCircle, FaDatabase} from 'react-icons/fa';
  import '../styles/MaintenanceScreen.css';
  import DiagnosticsScreen from '../minor-dashes/DiagnosticsScreen';
  import SoftwareUpdateScreen from '../minor-dashes/SoftwareUpdatesScreen';
  import HardwareInspectionScreen from '../minor-dashes/HardwareInspectionScreen';
  import SystemHealthCheckScreen from '../minor-dashes/SystemHealthCheckScreen';
  import ConfigurationManagementScreen from '../minor-dashes/ConfigurationManagementScreen';
  import OffchainBackupScreen from '../minor-dashes/OffchainBackupScreen';
  import ViewUpdateLogsScreen from '../minor-dashes/ViewUpdateLogsScreen';
  import ApplyPatchesScreen from '../minor-dashes/ApplyPatchesScreen';

  const MaintenanceScreen = () => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [activeScreen, setActiveScreen] = useState(null); // Track the active screen

    const maintenanceTasks = [
      { 
        id: 1, 
        title: 'Routine Checks', 
        description: 'Perform routine system checks and diagnostics.', 
        icon: <FaTools size={20} />, 
        actions: [
          { title: 'Diagnostics', action: () => setActiveScreen('diagnostics') },
          { title: 'View logs', action: () => setActiveScreen('viewUpdateLogs') },
          { title: 'Schedule next check', action: () => setActiveScreen('applyPatches') }
        ]
      },
      { 
        id: 2, 
        title: 'Updates', 
        description: 'Apply software updates and patches to ensure system security.', 
        icon: <FaWrench size={20} />, 
        actions: [
          { title: 'Check for updates', action: () => setActiveScreen('softwareUpdates') },
          { title: 'View update logs', action: () => setActiveScreen('viewUpdateLogs') },
          { title: 'Apply patches', action: () => setActiveScreen('applyPatches') }
        ]
      },
      { 
        id: 3, 
        title: 'Hardware', 
        description: 'Inspect and maintain hardware components for optimal performance.', 
        icon: <FaHammer size={20} />, 
        actions: [
          { title: 'Inspect hardware', action: () => setActiveScreen('hardwareInspection') },
          { title: 'Generate report' },
          { title: 'Schedule maintenance' }
        ]
      },
      { 
        id: 4, 
        title: 'Configuration', 
        description: 'Manage and update system configurations as needed.', 
        icon: <FaCog size={20} />, 
        actions: [
          { title: 'View configurations', action: () => setActiveScreen('configurationManagement') },
          { title: 'Update configuration' },
          { title: 'Restore default settings' }
        ]
      },
      { 
        id: 5, 
        description: 'Run health checks and ensure all systems are operating correctly.', 
        icon: <FaCheckCircle size={20} />, 
        title: 'Health', 
        actions: [
          { title: 'Run health check', action: () => setActiveScreen('systemHealthCheck') },
          { title: 'View system status' },
          { title: 'Generate health report' }
        ]
      },
      { 
        id: 6, 
        title: 'Backup', 
        description: 'Perform periodic backup of data in case of severe system failure.', 
        icon: <FaDatabase size={20} />, 
        actions: [
          { title: 'Start backup', action: () => setActiveScreen('offchainBackup') },
          { title: 'Restore backup' },
          { title: 'View backup logs' }
        ]
      },
    ];

    const TaskDetail = ({ task }) => (
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <h5>Actions:</h5>
          <ListGroup>
            {task.actions.map((action, index) => (
              <ListGroup.Item key={index}>
                <Button 
                  variant="primary" 
                  className="w-100"
                  onClick={action.action ? action.action : null}  // Handle button action
                >
                  {action.title}
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    );

    // Render the selected screen based on activeScreen state
    const renderActiveScreen = () => {
      switch (activeScreen) {
        case 'diagnostics':
          return <DiagnosticsScreen />;
        case 'softwareUpdates':
          return <SoftwareUpdateScreen />;
        case 'hardwareInspection':
          return <HardwareInspectionScreen />;
        case 'systemHealthCheck':
          return <SystemHealthCheckScreen />;
        case 'configurationManagement':
          return <ConfigurationManagementScreen />;
        case 'offchainBackup':
          return <OffchainBackupScreen />;
        case 'viewUpdateLogs':
          return <ViewUpdateLogsScreen />;
        case 'applyPatches':
          return <ApplyPatchesScreen />;
        default:
          return (
            <Card>
              <Card.Body>
                <h5 className="text-center">Please select a maintenance task from the menu above.</h5>
              </Card.Body>
            </Card>
          );
        };
      }

    return (
      <div className="maintenance-screen">
        <Container fluid>
          <Card>
          </Card>
            <h3 className="text-center mb-4">System Maintenance Tasks</h3>
          <br />

          {/* Navigation Menu */}
          <Nav fill variant="tabs" className="mb-4">
            {maintenanceTasks.map(task => (
              <Nav.Item key={task.id}>
                <Nav.Link
                  active={selectedTask && selectedTask.id === task.id}
                  onClick={() => { setSelectedTask(task); setActiveScreen(null); }}
                >
                  {task.icon} {task.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Display Task Details or Active Screen */}
          {selectedTask ? (
            <>
              <TaskDetail task={selectedTask} />
              {renderActiveScreen()} {/* Render selected screen */}
            </>
          ) : (
            <Card>
              <Card.Body>
                <h5 className="text-center">Please select a maintenance task from the menu above.</h5>
              </Card.Body>
            </Card>
          )}
        </Container>
      </div>
    );
  };

  export default MaintenanceScreen;

