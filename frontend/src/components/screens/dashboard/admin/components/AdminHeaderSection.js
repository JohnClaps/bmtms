import React, { useState, useEffect } from 'react';
import { Navbar, Form, FormControl, Button, Image, Badge, Modal, Dropdown } from 'react-bootstrap';
import { FaSearch, FaBell, FaBars, FaUser, FaCubes, FaProjectDiagram, FaBuilding, FaStar, FaBusinessTime, FaFlask, FaCog, FaBook, FaHandsHelping, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../../../images/logo.png';
import '../../admin/styles/Header.css';

const AdminHeaderSection = () => {
  const [preview, setPreview] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(3);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setPreview(savedImage);
    }
  }, []);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const markNotificationsAsRead = () => {
    setUnreadCount(0);
  };

  return (
    <>
      <Navbar className="header-section shadow-sm bg-white px-4 py-3" expand="lg">
        <Navbar.Brand href="/">
          <Image src={logo} alt="Logo" width={120} height={50} />
          Blockchain Mining Monitor
        </Navbar.Brand>

        <Form className="d-flex mx-auto" style={{ width: '40%' }}>
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2 rounded-pill border-0 shadow-sm px-4"
            aria-label="Search"
          />
          <Button variant="outline-success" className="rounded-pill px-3">
            <FaSearch />
          </Button>
        </Form>

        <div className="d-flex align-items-center">
          <Dropdown align="end" className="notification-dropdown">
            <Dropdown.Toggle variant="light" id="dropdown-notifications" className="position-relative me-4">
              <FaBell size={24} />
              {unreadCount > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  {unreadCount}
                </Badge>
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-right notification-tray shadow" style={{ minWidth: '300px' }}>
              <Dropdown.Header>Notifications</Dropdown.Header>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <Dropdown.Item key={index}>
                    {notification}
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item>No new notifications</Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item onClick={markNotificationsAsRead}>Mark all as read</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="dropdown-menu" className="me-2" style={{ zIndex: 1050 }}>
              <FaBars size={24} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-right shadow" style={{ minWidth: '250px', zIndex: 1050 }}>
              <Dropdown.Item><FaUser className="me-2" style={{ marginRight: '8px' }} />Your profile</Dropdown.Item>
              <Dropdown.Item><FaCubes className="me-2" style={{ marginRight: '8px' }} />Mineral reserves</Dropdown.Item>
              <Dropdown.Item><FaProjectDiagram className="me-2"style={{ marginRight: '8px' }} />Projects</Dropdown.Item>
              <Dropdown.Item><FaBuilding className="me-2" style={{ marginRight: '8px' }} />Organizations</Dropdown.Item>
              <Dropdown.Item><FaStar className="me-2" style={{ marginRight: '8px' }} />Sponsors</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item><FaBusinessTime className="me-2" style={{ marginRight: '8px' }} />Try Enterprise</Dropdown.Item>
              <Dropdown.Item><FaFlask className="me-2" style={{ marginRight: '8px' }} />Feature preview</Dropdown.Item>
              <Dropdown.Item><FaCog className="me-2" style={{ marginRight: '8px' }} />Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item><FaBook className="me-2" style={{ marginRight: '8px' }} />User Docs</Dropdown.Item>
              <Dropdown.Item><FaHandsHelping className="me-2" style={{ marginRight: '8px' }} />User Support</Dropdown.Item>
              <Dropdown.Item><FaUsers className="me-2" style={{ marginRight: '8px' }} />Community</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item><FaSignOutAlt className="me-2" style={{ marginRight: '8px' }} />Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Avatar upload component can go here if needed */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminHeaderSection;
