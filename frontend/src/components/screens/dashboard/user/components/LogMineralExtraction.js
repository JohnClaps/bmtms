import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Nav, Card, ListGroup, Pagination } from 'react-bootstrap';
import MinFooter from './../../../../web3/logic/MinFooter';
const LogMineralExtraction = () => {
  const [activeTab, setActiveTab] = useState('log');
  const [extractionData, setExtractionData] = useState([]);
  const [mineralType, setMineralType] = useState('');
  const [extractionAmount, setExtractionAmount] = useState('');
  const [productionDate, setProductionDate] = useState('');
  const [location, setLocation] = useState('');
  const [remarks, setRemarks] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const mineralTypes = ['Gold', 'Silver', 'Copper', 'Iron', 'Diamond'];
  const locations = ['Location A', 'Location B', 'Location C', 'Location D'];

  // Function to fetch extraction history
  const fetchExtractionData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/extraction-history');
      if (response.status === 200) {
        setExtractionData(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch extraction history:', error);
    }
  };

  // Fetch extraction history on component mount
  useEffect(() => {
    fetchExtractionData();
  }, []);

  // Re-fetch extraction data when the history tab is selected
  useEffect(() => {
    if (activeTab === 'history') {
      fetchExtractionData();
    }
  }, [activeTab]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExtraction = {
      type: mineralType,
      amount: extractionAmount,
      date: productionDate,
      location,
      remarks,
    };

    try {
      const response = await axios.post('http://localhost:4000/submit-extraction', newExtraction);
      if (response.status === 201) {
        setExtractionData(prevData => [...prevData, { ...newExtraction, date: productionDate }]); // Append new data
        setSuccessMessage('Extraction data submitted successfully!');
        resetForm();
      } else {
        throw new Error('Error submitting data');
      }
    } catch (error) {
      console.error('Failed to submit extraction data:', error);
      alert('There was an error submitting the data. Please try again.');
      setSuccessMessage('');
    }
  };

  // Reset form fields
  const resetForm = () => {
    setMineralType('');
    setExtractionAmount('');
    setProductionDate('');
    setLocation('');
    setRemarks('');
  };

  // Logic for pagination
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return extractionData.slice(startIndex, startIndex + itemsPerPage);
  };

  // Render form to log mineral extraction
  const renderLogForm = () => (
    <Card>
      <Card.Header>Mineral Logs</Card.Header>
      <Card.Body style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="mineralType">
            <Form.Label>Mineral Type</Form.Label>
            <Form.Control as="select" value={mineralType} onChange={(e) => setMineralType(e.target.value)} required>
              <option value="">Select mineral type</option>
              {mineralTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="extractionAmount">
            <Form.Label>Amount Extracted (tons)</Form.Label>
            <Form.Control type="number" placeholder="Enter amount extracted" value={extractionAmount} onChange={(e) => setExtractionAmount(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="productionDate">
            <Form.Label>Production Date</Form.Label>
            <Form.Control type="date" value={productionDate} onChange={(e) => setProductionDate(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control as="select" value={location} onChange={(e) => setLocation(e.target.value)} required>
              <option value="">Select location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="remarks">
            <Form.Label>Remarks</Form.Label>
            <Form.Control as="textarea" rows={3} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>

        {/* Display success message */}
        {successMessage && <div className="mt-3 text-success">{successMessage}</div>}
      </Card.Body>
    </Card>
  );

  // Render extraction history
  const renderExtractionHistory = () => {
    const currentPageData = getCurrentPageData();
    const totalPages = Math.ceil(extractionData.length / itemsPerPage);

    return (
      <Card>
        <Card.Header>History</Card.Header>
        <Card.Body>
          <ListGroup>
            {currentPageData.length > 0 ? (
              currentPageData.map((data, index) => (
                <ListGroup.Item key={index}>
                  {data.date}: {data.amount} tons of {data.type} from {data.location}. Remarks: {data.remarks}
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No extraction data available.</ListGroup.Item>
            )}
          </ListGroup>

          {/* Pagination */}
          <Pagination className="mt-3">
            <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
          </Pagination>
        </Card.Body>
      </Card>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'log':
        return renderLogForm();
      case 'history':
        return renderExtractionHistory();
      default:
        return renderLogForm();
    }
  };

  return (
    <Container className="mt-4">
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="log">Logs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="history">History</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="mt-4">
        {renderContent()}
      </div>
      <MinFooter/>
    </Container>
  );
};

export default LogMineralExtraction;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Button, Container, Nav, Card, ListGroup, Pagination } from 'react-bootstrap';
// import MinFooter from './../../../../web3/logic/MinFooter';
// import { JsonRpcProvider } from '@ethersproject/providers';
// import { ethers } from 'hardhat';

// const LogMineralExtraction = () => {
//   const [activeTab, setActiveTab] = useState('log');
//   const [extractionData, setExtractionData] = useState([]);
//   const [mineralType, setMineralType] = useState('');
//   const [extractionAmount, setExtractionAmount] = useState('');
//   const [productionDate, setProductionDate] = useState('');
//   const [location, setLocation] = useState('');
//   const [remarks, setRemarks] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 5;

//   const mineralTypes = ['Gold', 'Silver', 'Copper', 'Iron', 'Diamond'];
//   const locations = ['Location A', 'Location B', 'Location C', 'Location D'];

//   const provider = new ethers.JsonRpcProvider('https://goerli.infura.io/v3/https://INFURA_PROJECT_ID'); // Replace with your Infura project ID
//   const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; // Replace with your actual contract address
//   const contractABI = [
//     "function logExtraction(string memory _mineralType, uint256 _amount, string memory _productionDate, string memory _location, string memory _remarks) public",
//     "function getExtraction(uint256 _index) public view returns (string memory, uint256, string memory, string memory, string memory, uint256, string memory)"
//   ];
//   const contract = new ethers.Contract(contractAddress, contractABI, provider);

//   // Function to fetch extraction history
//   const fetchExtractionData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/extraction-history');
//       if (response.status === 200) {
//         setExtractionData(response.data);
//       }
//     } catch (error) {
//       console.error('Failed to fetch extraction history:', error);
//     }
//   };

//   // Fetch extraction history on component mount
//   useEffect(() => {
//     fetchExtractionData();
//   }, []);

//   // Re-fetch extraction data when the history tab is selected
//   useEffect(() => {
//     if (activeTab === 'history') {
//       fetchExtractionData();
//     }
//   }, [activeTab]);

//   // Handle form submission (Log data to Ethereum and backend)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create new extraction object for backend
//     const newExtraction = {
//       type: mineralType,
//       amount: extractionAmount,
//       date: productionDate,
//       location,
//       remarks,
//     };

//     try {
//       // Log extraction to Ethereum blockchain
//       const signer = provider.getSigner();
//       const contractWithSigner = contract.connect(signer);
//       const transaction = await contractWithSigner.logExtraction(mineralType, parseInt(extractionAmount), productionDate, location, remarks);

//       // Wait for the transaction to be mined
//       const receipt = await transaction.wait();

//       // Capture transaction details (block number, hash, timestamp)
//       const blockNumber = receipt.blockNumber;
//       const transactionHash = receipt.transactionHash;
//       const timestamp = new Date(receipt.block.timestamp * 1000).toLocaleString(); // Convert timestamp to readable date

//       // Add blockchain details to the extraction object
//       newExtraction.blockNumber = blockNumber;
//       newExtraction.transactionHash = transactionHash;
//       newExtraction.timestamp = timestamp;

//       // After blockchain submission, submit data to your backend
//       const response = await axios.post('http://localhost:4000/submit-extraction', newExtraction);

//       if (response.status === 201) {
//         setExtractionData(prevData => [...prevData, { ...newExtraction, date: productionDate }]); // Append new data
//         setSuccessMessage('Extraction data submitted successfully to both backend and blockchain!');
//         resetForm();
//       } else {
//         throw new Error('Error submitting data to backend');
//       }
//     } catch (error) {
//       console.error('Failed to submit extraction data:', error);
//       alert('There was an error submitting the data. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setMineralType('');
//     setExtractionAmount('');
//     setProductionDate('');
//     setLocation('');
//     setRemarks('');
//   };

//   // Logic for pagination
//   const getCurrentPageData = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return extractionData.slice(startIndex, startIndex + itemsPerPage);
//   };

//   // Render form to log mineral extraction
//   const renderLogForm = () => (
//     <Card>
//       <Card.Header>Mineral Logs</Card.Header>
//       <Card.Body style={{ maxHeight: '400px', overflowY: 'auto' }}>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="mineralType">
//             <Form.Label>Mineral Type</Form.Label>
//             <Form.Control as="select" value={mineralType} onChange={(e) => setMineralType(e.target.value)} required>
//               <option value="">Select mineral type</option>
//               {mineralTypes.map((type, index) => (
//                 <option key={index} value={type}>{type}</option>
//               ))}
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="extractionAmount">
//             <Form.Label>Amount Extracted (tons)</Form.Label>
//             <Form.Control type="number" placeholder="Enter amount extracted" value={extractionAmount} onChange={(e) => setExtractionAmount(e.target.value)} required />
//           </Form.Group>

//           <Form.Group controlId="productionDate">
//             <Form.Label>Production Date</Form.Label>
//             <Form.Control type="date" value={productionDate} onChange={(e) => setProductionDate(e.target.value)} required />
//           </Form.Group>

//           <Form.Group controlId="location">
//             <Form.Label>Location</Form.Label>
//             <Form.Control as="select" value={location} onChange={(e) => setLocation(e.target.value)} required>
//               <option value="">Select location</option>
//               {locations.map((loc, index) => (
//                 <option key={index} value={loc}>{loc}</option>
//               ))}
//             </Form.Control>
//           </Form.Group>

//           <Form.Group controlId="remarks">
//             <Form.Label>Remarks</Form.Label>
//             <Form.Control as="textarea" rows={3} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
//           </Form.Group>

//           <Button variant="primary" type="submit">Submit</Button>
//         </Form>

//         {/* Display success message */}
//         {successMessage && <div className="mt-3 text-success">{successMessage}</div>}
//       </Card.Body>
//     </Card>
//   );

//   // Render extraction history
//   const renderExtractionHistory = () => {
//     const currentPageData = getCurrentPageData();
//     const totalPages = Math.ceil(extractionData.length / itemsPerPage);

//     return (
//       <Card>
//         <Card.Header>History</Card.Header>
//         <Card.Body>
//           <ListGroup>
//             {currentPageData.length > 0 ? (
//               currentPageData.map((data, index) => (
//                 <ListGroup.Item key={index}>
//                   <strong>Mineral:</strong> {data.type} <br />
//                   <strong>Amount:</strong> {data.amount} tons <br />
//                   <strong>Location:</strong> {data.location} <br />
//                   <strong>Remarks:</strong> {data.remarks} <br />
//                   <strong>Production Date:</strong> {data.date} <br />
//                   <strong>Block Number:</strong> {data.blockNumber} <br />
//                   <strong>Transaction Hash:</strong> <a href={`https://goerli.etherscan.io/tx/${data.transactionHash}`} target="_blank" rel="noopener noreferrer">{data.transactionHash}</a> <br />
//                   <strong>Date:</strong> {data.timestamp} <br />
//                 </ListGroup.Item>
//               ))
//             ) : (
//               <ListGroup.Item>No extraction data available.</ListGroup.Item>
//             )}
//           </ListGroup>

//           {/* Pagination */}
//           <Pagination className="mt-3">
//             <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
//             {[...Array(totalPages)].map((_, index) => (
//               <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
//                 {index + 1}
//               </Pagination.Item>
//             ))}
//             <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
//           </Pagination>
//         </Card.Body>
//       </Card>
//     );
//   };

//   return (
//     <Container className="mt-4">
//       <Nav variant="tabs" activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
//         <Nav.Item>
//           <Nav.Link eventKey="log">Log Extraction</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="history">View History</Nav.Link>
//         </Nav.Item>
//       </Nav>

//       <div className="mt-4">
//         {activeTab === 'log' ? renderLogForm() : renderExtractionHistory()}
//       </div>
//     </Container>
//   );
// };

// export default LogMineralExtraction;
