import React, { useState } from 'react';
import { Card, Row, Col, Container, Form, Button, Nav } from 'react-bootstrap';
import { FaUser, FaBell, FaLanguage,FaPaintBrush } from 'react-icons/fa';
import '../styles/SettingsScreen.css';

const SettingsScreen = () => {
  const [activeSetting, setActiveSetting] = useState('account');

  const renderActiveSetting = () => {
    switch (activeSetting) {
      case 'account':
        return (
          <Card className="shadow-sm mb-4 settings-card">
            <Card.Body>
              <Card.Title className="text-primary">
                <FaUser size={24} className="me-2" />
                Account Settings
              </Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Change Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Save Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        );
      case 'appearance':
        return (
              <Card className="shadow-sm mb-4 settings-card">
                <Card.Body>
                  <Card.Title className="text-primary">
                    <FaPaintBrush size={24} className="me-2" />
                    Appearance Settings
                  </Card.Title>
                  <Form>
                    {/* Theme Selection */}
                    <Form.Group controlId="formThemeSelect">
                      <Form.Label>Select Theme</Form.Label>
                      <Form.Control as="select">
                        <option>Light</option>
                        <option>Dark</option>
                        <option>Blue</option>
                        <option>Green</option>
                        {/* Add more themes as needed */}
                      </Form.Control>
                    </Form.Group>
          
                    {/* Font Size Selection */}
                    <Form.Group controlId="formFontSize" className="mt-3">
                      <Form.Label>Font Size</Form.Label>
                      <Form.Control as="select">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </Form.Control>
                    </Form.Group>
          
                    {/* Background Color Picker */}
                    <Form.Group controlId="formBackgroundColor" className="mt-3">
                      <Form.Label>Background Color</Form.Label>
                      <Form.Control type="color" defaultValue="#ffffff" />
                    </Form.Group>
          
                    <Button variant="primary" type="submit" className="mt-3">
                      Save Appearance Settings
                    </Button>
                  </Form>
                </Card.Body>
              </Card>          
        );
      case 'notifications':
        return (
          <Card className="shadow-sm mb-4 settings-card">
            <Card.Body>
              <Card.Title className="text-primary">
                <FaBell size={24} className="me-2" />
                Notification Settings
              </Card.Title>
              <Form>
                <Form.Group controlId="formEmailNotifications">
                  <Form.Check type="checkbox" label="Email Notifications" />
                </Form.Group>
                <Form.Group controlId="formSmsNotifications">
                  <Form.Check type="checkbox" label="SMS Notifications" />
                </Form.Group>
                <Button variant="primary" type="submit">Save Notifications</Button>
              </Form>
            </Card.Body>
          </Card>
        );
      case 'language':
        return (
          <Card className="shadow-sm mb-4 settings-card">
            <Card.Body>
              <Card.Title className="text-primary">
                <FaLanguage size={24} className="me-2" />
                Language Settings
              </Card.Title>
              <Form>
                <Form.Group controlId="formLanguageSelect">
                  <Form.Label>Select Language</Form.Label>
                  <Form.Control as="select">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Save Language</Button>
              </Form>
            </Card.Body>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="settings-page">
      <Container fluid>
        {/* Top Navigation Menu */}
        <Nav className="justify-content-center shadow-sm p-3 mb-4 settings-menu" variant="tabs" activeKey={activeSetting}>
          <Nav.Item>
            <Nav.Link eventKey="account" onClick={() => setActiveSetting('account')}>
              <FaUser size={24} className="me-2" /> Account
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="appearance" onClick={() => setActiveSetting('appearance')}>
              <FaPaintBrush size={24} className="me-2" /> Appearance
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="notifications" onClick={() => setActiveSetting('notifications')}>
              <FaBell size={24} className="me-2" /> Notifications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="language" onClick={() => setActiveSetting('language')}>
              <FaLanguage size={24} className="me-2" /> Language
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Active Settings Screen */}
        <Row>
          <Col md={12}>
            {renderActiveSetting()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SettingsScreen;
