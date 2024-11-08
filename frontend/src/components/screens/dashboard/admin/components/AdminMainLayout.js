// // // // import React, { useState } from 'react';
// // // // import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
// // // // import { FaHome, FaCreditCard, FaChartLine, FaUser, FaShieldAlt, FaCog, FaFileAlt, FaSignOutAlt, FaLink } from 'react-icons/fa';

// // // // const AdminMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
// // // //   const [activeQuickLink, setActiveQuickLink] = useState(null);
// // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // //   return (
// // // //     <Container fluid>
// // // //       <Row className="flex-nowrap">
// // // //         {/* Sidebar */}
// // // //         <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''} bg-white p-0`}>
// // // //           <ListGroup variant="flush">
// // // //             <ListGroup.Item action onClick={() => handleMenuClick('HomeScreen')} className="bg-white text-dark">
// // // //               <FaHome style={{ marginRight: '8px' }} size={24} className="me-2" />
// // // //               Home
// // // //             </ListGroup.Item>
// // // //             <ListGroup.Item action onClick={() => handleMenuClick('UserManagementScreen')} className="bg-white text-dark">
// // // //               <FaUser style={{ marginRight: '8px' }} size={24} className="me-2" />
// // // //               Users
// // // //             </ListGroup.Item>
// // // //             <ListGroup.Item action onClick={() => handleMenuClick('SecurityScreen')} className="bg-white text-dark">
// // // //               <FaShieldAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// // // //               Security
// // // //             </ListGroup.Item>
// // // //             <ListGroup.Item action onClick={() => handleMenuClick('ReportsScreen')} className="bg-white text-dark">
// // // //               <FaFileAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// // // //               Reports
// // // //             </ListGroup.Item>
// // // //             <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-white text-dark">
// // // //               <FaSignOutAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// // // //               Logout
// // // //             </ListGroup.Item>
// // // //           </ListGroup>
// // // //         </Col>

// // // //         {/* Content Area */}
// // // //         <Col xs={8} className="content-area">
// // // //           {renderContent()}
// // // //         </Col>

// // // //         {/* Right Pane with Quick Links */}
// // // //         <Col xs={2} className="quick-links bg-white p-3">
// // // //           <h4 className="mb-3">Quick Links</h4>
// // // //           <ListGroup variant="flush">
// // // //             {quickLinks.map(link => (
// // // //               <ListGroup.Item
// // // //                 key={link.id}
// // // //                 action
// // // //                 onClick={() => setActiveQuickLink(link.id === activeQuickLink ? null : link.id)}
// // // //                 className="bg-white text-dark d-flex align-items-center"
// // // //               >
// // // //                 <FaLink size={20} className="me-2" />
// // // //                 {link.title}
// // // //               </ListGroup.Item>
// // // //             ))}
// // // //           </ListGroup>

// // // //           {activeQuickLink && (
// // // //             <Card className="mt-3 bg-light text-dark">
// // // //               <Card.Body>
// // // //                 <Card.Title>
// // // //                   {quickLinks.find(link => link.id === activeQuickLink)?.title}
// // // //                 </Card.Title>
// // // //                 <Card.Text>
// // // //                   {quickLinks.find(link => link.id === activeQuickLink)?.content}
// // // //                 </Card.Text>
// // // //               </Card.Body>
// // // //             </Card>
// // // //           )}
// // // //         </Col>
// // // //       </Row>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default AdminMainLayout;
// // // import React, { useState } from 'react';
// // // import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
// // // import { FaHome, FaCreditCard, FaChartLine, FaUser, FaShieldAlt, FaCog, FaFileAlt, FaSignOutAlt, FaLink } from 'react-icons/fa';

// // // const AdminMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
// // //   const [activeQuickLink, setActiveQuickLink] = useState(null);
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   return (
// // //     <Container fluid className="p-0">
// // //       <Row className="flex-nowrap">
// // //         {/* Sidebar */}
// // //         <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''} bg-white p-0`}>
// // //           <ListGroup variant="flush">
// // //             <ListGroup.Item action onClick={() => handleMenuClick('HomeScreen')} className="bg-white text-dark">
// // //               <FaHome style={{ marginRight: '8px' }} size={24} className="me-2" />
// // //               Home
// // //             </ListGroup.Item>
// // //             <ListGroup.Item action onClick={() => handleMenuClick('UserManagementScreen')} className="bg-white text-dark">
// // //               <FaUser style={{ marginRight: '8px' }} size={24} className="me-2" />
// // //               Users
// // //             </ListGroup.Item>
// // //             <ListGroup.Item action onClick={() => handleMenuClick('SecurityScreen')} className="bg-white text-dark">
// // //               <FaShieldAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// // //               Security
// // //             </ListGroup.Item>
// // //             <ListGroup.Item action onClick={() => handleMenuClick('ReportsScreen')} className="bg-white text-dark">
// // //               <FaFileAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// // //               Reports
// // //             </ListGroup.Item>
// // //             <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-white text-dark">
// // //               <FaSignOutAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// // //               Logout
// // //             </ListGroup.Item>
// // //           </ListGroup>
// // //         </Col>

// // //         {/* Content Area */}
// // //         <Col xs={8} className="content-area">
// // //           {renderContent()}
// // //         </Col>

// // //         {/* Right Pane with Quick Links */}
// // //         <Col xs={2} className="quick-links bg-white p-3">
// // //           <h4 className="mb-3">Quick Links</h4>
// // //           <ListGroup variant="flush">
// // //             {quickLinks.map(link => (
// // //               <ListGroup.Item
// // //                 key={link.id}
// // //                 action
// // //                 onClick={() => setActiveQuickLink(link.id === activeQuickLink ? null : link.id)}
// // //                 className="bg-white text-dark d-flex align-items-center"
// // //               >
// // //                 <FaLink size={20} className="me-2" />
// // //                 {link.title}
// // //               </ListGroup.Item>
// // //             ))}
// // //           </ListGroup>

// // //           {activeQuickLink && (
// // //             <Card className="mt-3 bg-light text-dark">
// // //               <Card.Body>
// // //                 <Card.Title>
// // //                   {quickLinks.find(link => link.id === activeQuickLink)?.title}
// // //                 </Card.Title>
// // //                 <Card.Text>
// // //                   {quickLinks.find(link => link.id === activeQuickLink)?.content}
// // //                 </Card.Text>
// // //               </Card.Body>
// // //             </Card>
// // //           )}
// // //         </Col>
// // //       </Row>
// // //     </Container>
// // //   );
// // // };

// // // export default AdminMainLayout;
// // import React, { useState } from 'react';
// // import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
// // import { FaHome, FaCreditCard, FaChartLine, FaUser, FaShieldAlt, FaCog, FaFileAlt, FaSignOutAlt, FaLink } from 'react-icons/fa';

// // const AdminMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
// //   const [activeQuickLink, setActiveQuickLink] = useState(null);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   return (
// //     <Container fluid className="p-0">
// //       <Row className="flex-nowrap">
// //         {/* Sidebar */}
// //         <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''} bg-white p-0`}>
// //           <ListGroup variant="flush">
// //             <ListGroup.Item action onClick={() => handleMenuClick('HomeScreen')} className="bg-white text-dark">
// //               <FaHome style={{ marginRight: '8px' }} size={24} className="me-2" />
// //               Home
// //             </ListGroup.Item>
// //             <ListGroup.Item action onClick={() => handleMenuClick('UserManagementScreen')} className="bg-white text-dark">
// //               <FaUser style={{ marginRight: '8px' }} size={24} className="me-2" />
// //               Users
// //             </ListGroup.Item>
// //             <ListGroup.Item action onClick={() => handleMenuClick('SecurityScreen')} className="bg-white text-dark">
// //               <FaShieldAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// //               Security
// //             </ListGroup.Item>
// //             <ListGroup.Item action onClick={() => handleMenuClick('ReportsScreen')} className="bg-white text-dark">
// //               <FaFileAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// //               Reports
// //             </ListGroup.Item>
// //             <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-white text-dark">
// //               <FaSignOutAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
// //               Logout
// //             </ListGroup.Item>
// //           </ListGroup>
// //         </Col>

// //         {/* Content Area */}
// //         <Col xs={8} className="content-area">
// //           {renderContent()}
// //         </Col>

// //         {/* Right Pane with Quick Links */}
// //         <Col xs={2} className="quick-links bg-white p-3">
// //           <h4 className="mb-3">Quick Links</h4>
// //           <ListGroup variant="flush">
// //             {quickLinks.map(link => (
// //               <ListGroup.Item
// //                 key={link.id}
// //                 action
// //                 onClick={() => setActiveQuickLink(link.id === activeQuickLink ? null : link.id)}
// //                 className="bg-white text-dark d-flex align-items-center"
// //               >
// //                 <FaLink size={20} className="me-2" />
// //                 {link.title}
// //               </ListGroup.Item>
// //             ))}
// //           </ListGroup>
// //           {activeQuickLink && (

// //             <Card className="mt-3 bg-light text-dark">
// //               <Card.Body>
// //                 <Card.Title>
// //                   {quickLinks.find(link => link.id === activeQuickLink)?.title}
// //                 </Card.Title>
// //                 <Card.Text>
// //                   {quickLinks.find(link => link.id === activeQuickLink)?.content}
// //                 </Card.Text>
// //               </Card.Body>
// //             </Card>
// //           )}
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default AdminMainLayout;
// import React from 'react';
// import { Container, Row, Col, ListGroup } from 'react-bootstrap';
// import { FaHome, FaUser, FaShieldAlt, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

// const AdminMainLayout = ({ handleMenuClick, renderContent }) => {
//   return (
//     <Container fluid className="p-0">
//       <Row className="flex-nowrap">
//         {/* Sidebar */}
//         <Col xs={2} className="sidebar bg-white p-0">
//           <ListGroup variant="flush">
//             <ListGroup.Item action onClick={() => handleMenuClick('HomeScreen')} className="bg-white text-dark">
//               <FaHome style={{ marginRight: '8px' }} size={24} className="me-2" />
//               Home
//             </ListGroup.Item>
//             <ListGroup.Item action onClick={() => handleMenuClick('UserManagementScreen')} className="bg-white text-dark">
//               <FaUser style={{ marginRight: '8px' }} size={24} className="me-2" />
//               Users
//             </ListGroup.Item>
//             <ListGroup.Item action onClick={() => handleMenuClick('SecurityScreen')} className="bg-white text-dark">
//               <FaShieldAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
//               Security
//             </ListGroup.Item>
//             <ListGroup.Item action onClick={() => handleMenuClick('ReportsScreen')} className="bg-white text-dark">
//               <FaFileAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
//               Reports
//             </ListGroup.Item>
//             <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-white text-dark">
//               <FaSignOutAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
//               Logout
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>

//         {/* Content Area */}
//         <Col xs={10} className="content-area">
//           {renderContent()}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminMainLayout;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { FaHome, FaUser, FaShieldAlt, FaFileAlt, FaSignOutAlt, FaWallet, FaLink } from 'react-icons/fa';

const AdminMainLayout = ({ handleMenuClick, renderContent }) => {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Check Web3 connection status on component mount
  useEffect(() => {
    if (window.ethereum) {
      // Check if MetaMask is installed and connected
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
          } else {
            setIsConnected(false);
          }
        });
    } else {
      setIsConnected(false);
    }
  }, []);

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Connection failed:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };

  return (
    <Container fluid className="p-0">
      <Row className="flex-nowrap">
        {/* Sidebar */}
        <Col xs={2} className="sidebar bg-white p-0">
          <ListGroup variant="flush">
            <ListGroup.Item action onClick={() => handleMenuClick('HomeScreen')} className="bg-white text-dark">
              <FaHome style={{ marginRight: '8px' }} size={24} className="me-2" />
              Home
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('UserManagementScreen')} className="bg-white text-dark">
              <FaUser style={{ marginRight: '8px' }} size={24} className="me-2" />
              Users
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('SecurityScreen')} className="bg-white text-dark">
              <FaShieldAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
              Security
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('ReportsScreen')} className="bg-white text-dark">
              <FaFileAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
              Reports
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-white text-dark">
              <FaSignOutAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
              Logout
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Content Area */}
        <Col xs={8} className="content-area">
          {renderContent()}
        </Col>

        {/* Web3 Account Details Section */}
        <Col xs={2} className="account-details bg-white p-3">
          <h4 className="mb-3">Web3 Account</h4>
          {!isConnected ? (
            <button onClick={handleConnect} className="btn btn-primary">
              <FaWallet style={{ marginRight: '8px' }} size={20} />
              Connect Wallet
            </button>
          ) : (
            <Card className="mt-3 bg-light text-dark">
              <Card.Body>
                <Card.Title>Connected</Card.Title>
                <Card.Text>
                  <strong>Wallet Address:</strong><br />
                  {account}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminMainLayout;
