import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const footerStyle = {
  backgroundColor: '#f9f9f9',
  padding: '40px 0',
  borderTop: '1px solid #e0e0e0',
};

const columnTitleStyle = {
  fontWeight: 'bold',
  marginBottom: '0.5px',
};

const linkStyle = {
  color: '#333',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '8px',
  fontSize: '14px',
};

const iconStyle = {
  color: '#333',
  fontSize: '20px',
  margin: '0 10px',
  cursor: 'pointer',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="mb-4">
          <Col md={3}>
            <div style={columnTitleStyle}>Learn</div>
            <a href="/learn" style={linkStyle}>Learn our mining policy</a>
            <a href="/what-is-ethereum" style={linkStyle}>What is Blockchain?</a>
            <a href="/what-is-ether" style={linkStyle}>What is our platform all about?</a>
            <a href="/ethereum-wallets" style={linkStyle}>Mineral royalties?</a>
          </Col>
          <Col md={3}>
            <div style={columnTitleStyle}>Use</div>
            <a href="/guides" style={linkStyle}>Guides</a>
            <a href="/choose-wallet" style={linkStyle}>Choose your wallet</a>
            <a href="/get-eth" style={linkStyle}>Get ETH</a>
            <a href="/dapps" style={linkStyle}>Dapps - Decentralized applications</a>
          </Col>
          <Col md={3}>
            <div style={columnTitleStyle}>Monitor</div>
            <a href="/tutorials" style={linkStyle}>Tutorials</a>
            <a href="/documentation" style={linkStyle}>Documentation</a>
            <a href="/learn-by-coding" style={linkStyle}>Open an Account</a>
          </Col>
          <Col md={3}>
            <div style={columnTitleStyle}>Participate</div>
            <a href="/community" style={linkStyle}>Community hub</a>
            <a href="/events" style={linkStyle}>Events</a>
            <a href="/contribute" style={linkStyle}>Continuity</a>
          </Col>
        </Row>

        <Row className="justify-content-center mb-3">
          <Col md="auto">
            <FaFacebook style={iconStyle} />
            <FaTwitter style={iconStyle} />
            <FaInstagram style={iconStyle} />
            <FaGithub style={iconStyle} />
          </Col>
        </Row>

        <Row>
          <Col className="text-center" style={{ fontSize: '14px', color: '#666' }}>
            &copy; 2024 Blockchain Mining Monitor | <a href="/privacy-policy" style={{ ...linkStyle, color: '#666' }} target="_blank">Privacy Policy</a> | <a href="/contact" style={{ ...linkStyle, color: '#666' }}>Contact Us</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
