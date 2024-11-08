// import React, { useState } from 'react';
// import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
// import { FaHome, FaCreditCard, FaChartLine, FaReceipt,FaUserFriends,FaHammer, FaSignOutAlt, FaLink, FaCog } from 'react-icons/fa';

// const VerifierMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
//   const [activeQuickLink, setActiveQuickLink] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);

// return (
// <Container fluid className="p-0">
// <Row className="flex-nowrap">
//   <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''} bg-white p-0`}>
//   {/* Sidebar */}
//     <ListGroup variant="flush">
//     <ListGroup.Item action onClick={() => handleMenuClick('VerifierHomeScreen')} className="bg-white text-dark">
//         <FaHome style={{ marginRight: '8px' }}size={24} className="me-2" />
//         Home
//       </ListGroup.Item>
//       <ListGroup.Item action onClick={() => handleMenuClick('RoyaltiesPaymentVerificationScreen')} className="bg-white text-dark">
//         <FaCreditCard style={{ marginRight: '8px' }} size={24} className="me-2" />
//         Royalties
//       </ListGroup.Item>
//       <ListGroup.Item action onClick={() => handleMenuClick('ExportProcessMonitoringScreen')} className="bg-white text-dark">
//         <FaChartLine style={{ marginRight: '8px' }} size={24} className="me-2" />
//         Exports
//       </ListGroup.Item>
//       <ListGroup.Item action onClick={() => handleMenuClick('MineralSalesAuditScreen')} className="bg-white text-dark">
//         <FaReceipt style={{ marginRight: '8px' }} size={24} className="me-2" />
//         Sales
//       </ListGroup.Item>
//       <ListGroup.Item action onClick={() => handleMenuClick('ProductionDataVerificationScreen')} className="bg-white text-dark">
//       <FaHammer style={{ marginRight: '8px' }} size={24} className="me-2" />
//       Production
//       </ListGroup.Item>
//       <ListGroup.Item action onClick={() => handleMenuClick('Chat')} className="bg-white text-dark">
//         <FaUserFriends  style={{ marginRight: '8px' }} size={24} className="me-2" />
//         Chat
//       </ListGroup.Item>
//       <ListGroup.Item action onClick={() => handleMenuClick('SettingsScreen')} className="bg-white text-dark">
//       <FaCog  style={{ marginRight: '8px' }} size={24} className="me-2" />
//      Settings
//     </ListGroup.Item>
//     <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-white text-dark">
//     <FaSignOutAlt  style={{ marginRight: '8px' }} size={24} className="me-2" />
//     Logout
//   </ListGroup.Item>
//     </ListGroup>
//   </Col>

//   {/* Content Area */}
//   <Col xs={8} className="content-area">
//     {renderContent()}
//   </Col>

//   {/* Right Pane with Quick Links */}
//   <Col xs={2} className="quick-links bg-white p-3">
//     <h4 className="mb-3">Quick Links</h4>
//     <ListGroup variant="flush">
//       {quickLinks.map(link => (
//         <ListGroup.Item 
//           key={link.id}
//           action
//           onClick={() => setActiveQuickLink(link.id === activeQuickLink ? null : link.id)}
//           className="bg-white text-dark d-flex align-items-center"
//         >
//           <FaLink size={20} className="me-2" />
//           {link.title}
//         </ListGroup.Item>
//       ))}
//     </ListGroup>

//     {activeQuickLink && (
//       <Card className="mt-3 bg-light text-dark">
//         <Card.Body>
//           <Card.Title>
//             {quickLinks.find(link => link.id === activeQuickLink)?.title}
//           </Card.Title>
//           <Card.Text>
//             {quickLinks.find(link => link.id === activeQuickLink)?.content}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     )}
//   </Col>
// </Row>
// </Container>
// );
// };
// export default VerifierMainLayout;

import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { FaHome, FaCreditCard, FaChartLine, FaReceipt, FaUserFriends, FaHammer, FaSignOutAlt, FaLink, FaCog, FaCaretRight } from 'react-icons/fa';

const VerifierMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeQuickLink, setActiveQuickLink] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="main-layout d-flex flex-column vh-100">
      <Container fluid className="flex-grow-1 d-flex p-0">
        <Row className="flex-nowrap w-100">
          {/* Sidebar */}
          <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''} bg-white p-0`}>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => handleMenuClick('VerifierHomeScreen')} className="bg-white text-dark">
                <FaHome size={24} className="me-2" /> Home
              </ListGroup.Item>

              <ListGroup.Item
                action
                onMouseEnter={() => handleMouseEnter('royalties')}
                onMouseLeave={handleMouseLeave}
                className="bg-white text-dark d-flex justify-content-between"
              >
                <span><FaCreditCard size={24} className="me-2" /> Royalties</span>
                <FaCaretRight size={16} />
                {activeDropdown === 'royalties' && (
                  <div className="submenu">
                    <span className="submenu-item" onClick={() => handleMenuClick('RoyaltiesPaymentVerificationScreen')}>Verify Payments</span>
                    {/* Add other submenu items as needed */}
                  </div>
                )}
              </ListGroup.Item>

              <ListGroup.Item
                action
                onMouseEnter={() => handleMouseEnter('exports')}
                onMouseLeave={handleMouseLeave}
                className="bg-white text-dark d-flex justify-content-between"
              >
                <span><FaChartLine size={24} className="me-2" /> Exports</span>
                <FaCaretRight size={16} />
                {activeDropdown === 'exports' && (
                  <div className="submenu">
                    <span className="submenu-item" onClick={() => handleMenuClick('ExportProcessMonitoringScreen')}>Monitor Exports</span>
                    {/* Add other submenu items as needed */}
                  </div>
                )}
              </ListGroup.Item>

              <ListGroup.Item
                action
                onMouseEnter={() => handleMouseEnter('sales')}
                onMouseLeave={handleMouseLeave}
                className="bg-white text-dark d-flex justify-content-between"
              >
                <span><FaReceipt size={24} className="me-2" /> Sales</span>
                <FaCaretRight size={16} />
                {activeDropdown === 'sales' && (
                  <div className="submenu">
                    <span className="submenu-item" onClick={() => handleMenuClick('MineralSalesAuditScreen')}>Audit Sales</span>
                    {/* Add other submenu items as needed */}
                  </div>
                )}
              </ListGroup.Item>

              <ListGroup.Item
                action
                onMouseEnter={() => handleMouseEnter('production')}
                onMouseLeave={handleMouseLeave}
                className="bg-white text-dark d-flex justify-content-between"
              >
                <span><FaHammer size={24} className="me-2" /> Production</span>
                <FaCaretRight size={16} />
                {activeDropdown === 'production' && (
                  <div className="submenu">
                    <span className="submenu-item" onClick={() => handleMenuClick('ProductionDataVerificationScreen')}>Verify Production Data</span>
                    {/* Add other submenu items as needed */}
                  </div>
                )}
              </ListGroup.Item>

              <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-white text-dark">
                <FaSignOutAlt size={24} className="me-2" /> Logout
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Content Area */}
          <Col xs={8} className="content-area">
            {renderContent()}
          </Col>

          {/* Right Pane with Quick Links */}
          <Col xs={2} className="quick-links bg-light p-3">
            <h4 className="mb-3">Quick Links</h4>
            <ListGroup variant="flush">
              {quickLinks.map(link => (
                <ListGroup.Item
                  key={link.id}
                  action
                  onClick={() => setActiveQuickLink(link.id === activeQuickLink ? null : link.id)}
                  className="bg-white text-dark d-flex align-items-center"
                >
                  <FaLink size={20} className="me-2" />
                  {link.title}
                </ListGroup.Item>
              ))}
            </ListGroup>

            {activeQuickLink && (
              <Card className="mt-3 bg-light text-dark">
                <Card.Body>
                  <Card.Title>
                    {quickLinks.find(link => link.id === activeQuickLink)?.title}
                  </Card.Title>
                  <Card.Text>
                    {quickLinks.find(link => link.id === activeQuickLink)?.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VerifierMainLayout;
