import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={footerStyle}>
      <Container>
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
const footerStyle = {
    backgroundColor: '#f9f9f9',
    padding: '40px 0',
    borderTop: '1px solid #e0e0e0',
  };
  
  // const columnTitleStyle = {
  //   fontWeight: 'bold',
  //   marginBottom: '10px',
  // };
  
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
  
export default Footer;
