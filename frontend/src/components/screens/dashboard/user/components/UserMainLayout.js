import React, { useState,useEffect } from 'react';
import { Container,Card,Badge,Button, Row, Col, ListGroup } from 'react-bootstrap';
import { FaHome, FaHammer, FaReceipt, FaCreditCard, FaDollarSign, FaSignOutAlt, FaLink, FaCaretRight } from "react-icons/fa";
import MinFooter from './../../../../web3/logic/MinFooter.js';

const UserMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [blockchainData, setBlockchainData] = useState({ blockHeight: 123456, latestTx: '0xABC123' });
  
    useEffect(() => {
      if (walletConnected) {
        setTransactionHistory([
          { id: 1, date: '2024-10-01', amount: '5 ETH', status: 'Completed' },
          { id: 2, date: '2024-09-28', amount: '2.5 ETH', status: 'Pending' },
        ]);
      }
    }, [walletConnected]);
  
    // Handle mouse hover to show submenu
    const handleMouseEnter = (menu) => {
      setActiveDropdown(menu);
    };
  
    const handleMouseLeave = () => {
      setActiveDropdown(null);
    };
  
    const handleConnectWallet = () => {
      setWalletConnected(true);  // Simulate wallet connection
    };

  return (
    <div className="main-layout d-flex flex-column vh-100">
      <Container fluid className="flex-grow-1 d-flex p-0">
        <Row className="flex-nowrap w-100">
          {/* Sidebar */}
          <Col xs={2} className="sidebar bg-white p-0">
            <ListGroup variant="flush">
              <ListGroup.Item 
                action 
                onClick={() => handleMenuClick('UserHomeScreen')} 
                className="bg-white text-dark"
              >
                <FaHome size={24} className="me-2" /> Home
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
                    <span className="submenu-item" onClick={() => handleMenuClick('LogMineralExtraction')}>Log Extraction</span>
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
                    <span className="submenu-item" onClick={() => handleMenuClick('SalesScreen')}>Sales Overview</span>
                    {/* Add other submenu items as needed */}
                  </div>
                )}
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
                    <span className="submenu-item" onClick={() => handleMenuClick('RoyaltiesScreen')}>View Royalties</span>
                    {/* Add other submenu items as needed */}
                  </div>
                )}
              </ListGroup.Item>

              <ListGroup.Item 
                action 
                onMouseEnter={() => handleMouseEnter('analytics')} 
                onMouseLeave={handleMouseLeave} 
                className="bg-white text-dark d-flex justify-content-between"
              >
                <span><FaDollarSign size={24} className="me-2" /> Analytics</span>
                <FaCaretRight size={16} />
                {activeDropdown === 'analytics' && (
                  <div className="submenu">
                    <span className="submenu-item" onClick={() => handleMenuClick('AnalyticsScreen')}>Analytics Dashboard</span>
                    {/* Add other submenu items as needed */}
                  </div>
                )}
              </ListGroup.Item>

              <ListGroup.Item 
                action 
                onClick={() => handleMenuClick('ExportProcessMonitoringScreen')} 
                className="bg-white text-dark"
              >
                <FaDollarSign size={24} className="me-2" /> Exports
              </ListGroup.Item>

              <ListGroup.Item 
                action 
                onClick={() => handleMenuClick('Logout')} 
                className="bg-white text-dark"
              >
                <FaSignOutAlt size={24} className="me-2" /> Logout
              </ListGroup.Item>
            </ListGroup>
          </Col>
                     {/* Content Area */}
           <Col xs={8} className="content-area">
            {renderContent()}
           </Col>

           {/* Blockchain Features on Right (Including Wallet Connection) */}
          <Col xs={2} className="blockchain-features bg-light p-3">
             <h4 className="mb-3">Account Details</h4>

            {/* Blockchain Data */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Blockchain Data</Card.Title>
                <div>Block Height: <strong>{blockchainData.blockHeight}</strong></div>
                <div>Latest Transaction: <strong>{blockchainData.latestTx}</strong></div>
              </Card.Body>
            </Card>

            {/* Transaction History */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Recent Transactions</Card.Title>
                {transactionHistory.length > 0 ? (
                  <ul>
                    {transactionHistory.map((tx) => (
                      <li key={tx.id}>{tx.date} - {tx.amount} - {tx.status}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No recent transactions.</p>
                )}
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
      <MinFooter />
    </div>
  );
};
export default UserMainLayout;
