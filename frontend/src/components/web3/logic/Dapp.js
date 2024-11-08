// import React, { useState } from "react";
// import { DropdownButton, Dropdown, Modal, Button, Card, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import logo from "../../images/logo.png";
// import backgroundImage1 from "../../images/backgroundImage1.jpg";
// import diamond2 from '../../images/diamond2.jpg';
// import { NetworkErrorMessage } from "./NetworkErrorMessage";
// import SignUpForm from "../../screens/authentication/SignUpForm";
// import Footer from './Footer';

// export function ConnectWallet({ connectWallet, networkError, dismiss }) {
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [hoveredDropdown, setHoveredDropdown] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const handleMetaMaskLogin = async () => {
//     await connectWallet();
//   };

//   const handleSignUpClick = () => setShowSignUp(true);
//   const handleCloseSignUp = () => setShowSignUp(false);

//   const openInNewTab = (url) => {
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         {/* Logo */}
//         <div style={styles.logoContainer}>
//           <img src={logo} alt="Company Logo" style={styles.logo} />
//           <h2 style={styles.headerTitle}>Blockchain Mining Monitor</h2>
//         </div>

//         {/* Accordion for Dropdown Menus */}
//         <div style={styles.accordionContainer}>
//             <DropdownButton 
//               id="dropdown-basic-button" 
//               title="License" 
//               size="sm"
//               style={styles.dropdown}
//               variant="light"
//               onMouseEnter={() => setHoveredDropdown('License')}
//               onMouseLeave={() => setHoveredDropdown(null)}
//               show={hoveredDropdown === 'License'}
//             >
//               <Dropdown.Item onClick={() => openInNewTab("https://mitc.mw/invest/index.php/investment-climate/laws-and-regulations")}>View Licenses</Dropdown.Item>
//               <Dropdown.Item onClick={() => openInNewTab("https://malawitradeportal.com/index.php?r=searchProcedure/view1&id=101")}>Apply for a License</Dropdown.Item>
//               <Dropdown.Item onClick={() => openInNewTab("https://malawitradeportal.com/index.php?r=searchProcedure/view1&id=101")}>Renew License</Dropdown.Item>
//             </DropdownButton>

//             <DropdownButton 
//               id="dropdown-basic-button" 
//               title="Minerals" 
//               size="sm"
//               style={styles.dropdown}
//               variant="light"
//               onMouseEnter={() => setHoveredDropdown('Minerals')}
//              onMouseLeave={() => setHoveredDropdown(null)}
//               show={hoveredDropdown === 'Minerals'}
//             >
//               <Dropdown.Item onClick={() => openInNewTab("https://www.mining.gov.mw/index.php/about-us/minerals-found-in-malawi")}>View Minerals</Dropdown.Item>
//               <Dropdown.Item onClick={() => openInNewTab("https://edf.mw/index.php/pmmu/about-pmmu")}>Market Prices</Dropdown.Item>
//               <Dropdown.Item onClick={() => openInNewTab("https://www.mining.gov.mw/index.php/about-us/minerals-found-in-malawi")}>Minerals Info</Dropdown.Item>
//             </DropdownButton>

//             <DropdownButton 
//               id="dropdown-basic-button" 
//               title="Regulatory Framework" 
//               variant="light"
//               size="sm"
//               style={styles.dropdown}
//               onMouseEnter={() => setHoveredDropdown('Regulatory Framework')}
//               onMouseLeave={() => setHoveredDropdown(null)}
//               show={hoveredDropdown === 'Regulatory Framework'}
//             >
//               <Dropdown.Item onClick={() => openInNewTab("https://npc.mw/wp-content/uploads/2020/07/malawi-mines-minerals-policy-2013.pdf")}>Compliance</Dropdown.Item>
//               <Dropdown.Item onClick={() => openInNewTab("https://www.mining.gov.mw/index.php/resouces/downloads/policies")}>Policies</Dropdown.Item>
//             </DropdownButton>

//             <DropdownButton 
//               id="dropdown-basic-button" 
//               title="Information" 
//               variant="light"
//               size="sm"
//               style={styles.dropdown}
//               onMouseEnter={() => setHoveredDropdown('Information')}
//               onMouseLeave={() => setHoveredDropdown(null)}
//               show={hoveredDropdown === 'Information'}
//             >
//               <Dropdown.Item onClick={() => openInNewTab("https://www.mining.gov.mw/index.php/resouces/news-and-media/top-news")}>News</Dropdown.Item>
//               <Dropdown.Item onClick={() => openInNewTab("https://www.mining.gov.mw/")}>Reports</Dropdown.Item>
//               <Dropdown.Item onClick={() => openInNewTab("https://www.mining.gov.mw/index.php/component/sppagebuilder/39-frequently-asked-questions-faq-s")}>FAQs</Dropdown.Item>
//             </DropdownButton>
//           </div>


//         {/* Authentication, Profile, and Notifications */}
//         <div style={styles.authButtons}>
//           {networkError && <NetworkErrorMessage message={networkError} dismiss={dismiss} />}
//           <button style={styles.authButton} onClick={handleMetaMaskLogin}>
//             Login
//           </button>
//           <button style={styles.authButton} onClick={handleSignUpClick}>
//             Sign Up
//           </button>
//           <button style={styles.iconButton}>
//             <i className="fas fa-bell" aria-hidden="true" style={styles.icon}></i>
//           </button>
//           <DropdownButton id="profile-dropdown" title="Profile" size="sm" style={styles.dropdown}>
//             <Dropdown.Item href="#/profile">View Profile</Dropdown.Item>
//             <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
//             <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//           </DropdownButton>
//         </div>
//       </header>

//       {/* Remaining Code */}
//       <div style={styles.content}>
//         <h1 style={styles.welcomeMessage}>Welcome to Blockchain Mining Monitor</h1>
        
//         {/* Search Bar */}
//         <div style={styles.searchBarContainer}>
//           <div style={styles.searchBar}>
//             <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
//             <input 
//               type="text" 
//               placeholder="Search for mining transactions, licenses, and more..." 
//               style={styles.largeSearchBar} 
//             />
//           </div>
//         </div>

//         <p style={styles.manageText}>Manage your mining transactions securely and efficiently.</p>

//         <Row style={styles.metricCards} className="justify-content-center">
//            {[
//              { title: "Mining companies", value: "50+" },
//              { title: "Active Miners", value: "50" },
//              { title: "Total Revenue", value: "$200,000" },
//              { title: "Licenses Issued", value: "75" },
//            ].map((metric, index) => (
//              <Col md={3} key={index} className="d-flex justify-content-center">
//                <Card
//                  style={{
//                    ...styles.metricCard,
//                    ...(hoveredCard === index ? styles.metricCardHover : {}),
//                  }}
//                  onMouseEnter={() => setHoveredCard(index)}
//                  onMouseLeave={() => setHoveredCard(null)}
//                >
//                  <Card.Body>
//                    <Card.Title>{metric.title}</Card.Title>
//                    <Card.Text>{metric.value}</Card.Text>
//                 </Card.Body>
//                </Card>
//              </Col>
//            ))}
//          </Row>
//       </div>

//       {/* Blockchain Image */}
//       <div style={styles.blockchainImageContainer}>
//         <img src={backgroundImage1} alt="Blockchain" style={styles.blockchainImage} />
//       </div>

//       {/* Footer */}
//       <Footer />

//       <Modal show={showSignUp} onHide={handleCloseSignUp} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Sign Up</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <SignUpForm />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseSignUp}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "100vh",
//     backgroundImage: `url(${diamond2})`,
//     backgroundSize: "cover",
//     color: "#fff",
//     overflowY: "auto",
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "20px",
//     backgroundColor: "white",
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   logoContainer: {
//     display: "flex",
//     alignItems: "center",
//   },
//   logo: {
//     width: "50px",
//     marginRight: "10px",
//   },
//   headerTitle: {
//     color: "#333",
//   },
//   accordionContainer: {
//     display: "flex",
//     gap: "10px",
//   },
//   dropdown: {
//     border: "none",
//     color: "#333",
//   },
//   authButtons: {
//     display: "flex",
//     alignItems: "center",
//   },
//   authButton: {
//       backgroundColor: "#f7f7f7",
//       gap: "10px",
//     border: "none",
//     borderRadius: "5px",
//     padding: "10px 15px",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: "5px",
//   },
//   miniLogo: {
//     width: "20px",
//   },
//   iconButton: {
//     backgroundColor: "transparent",
//     border: "none",
//     cursor: "pointer",
//     color: "#333",
//   },
//   icon: {
//     fontSize: "18px",
//   },
//   content: {
//     flex: 1,
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   welcomeMessage: {
//     fontSize: "24px",
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   searchBarContainer: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "20px",
//   },
//   searchBar: {
//     position: "relative",
//     width: "80%",
//   },
//   searchIcon: {
//     position: "absolute",
//     left: "10px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     color: "#aaa",
//   },
//   largeSearchBar: {
//     width: "100%",
//     padding: "10px 10px 10px 40px", // Added padding to the left for the icon
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   manageText: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   metricCards: {
//     width: "100%",
//   },
//   metricCard: {
//     backgroundColor: "white",
//     color: "black",
//     borderRadius: "10px",
//     padding: "20px",
//     textAlign: "center",
//     transition: "transform 0.2s, background-color 0.2s",
//   },
//   metricCardHover: {
//     transform: "scale(1.05)",
//     backgroundColor: "white",
//   },
//   footer: {
//     marginTop: "auto",
//   },
//   blockchainImageContainer: {
//     display: "flex",
//     justifyContent: "center",
//     width: '100%',
//   },
//   blockchainImage: {
//     width: "100%",
//     height: "auto",
//   },
// };

// export default ConnectWallet;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import AdminSideBar from "./../../screens/dashboard/admin/components/AdminSideBar";
import VerifierSideBar from './../../screens/dashboard/verifier/components/VerifierSideBar'
import UserSideBar from "./../../screens/dashboard/user/components/UserSideBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminSideBar />} />
        <Route path="/verifier" element={<VerifierSideBar />} />
        <Route path="/user" element={<UserSideBar />} />
      </Routes>
    </Router>
  );
}

export default App;
