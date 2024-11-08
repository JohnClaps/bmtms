import React, { useState } from 'react';
import { Row, Col, Card, Nav, Pagination } from 'react-bootstrap';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title } from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title);

// Custom marker icon
const customMarker = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

// Sample mine locations (latitude and longitude)
const mineLocations = [
  { name: 'Kayelekera Uranium Mine', lat: -10.0163, lng: 33.4834 },
  { name: 'Chilumba Coal Mine', lat: -10.406, lng: 33.927 },
  { name: 'Mchenga Coal Mine', lat: -10.786, lng: 34.063 },
];

// Sample transaction data
const sampleTransactions = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  date: `2024-09-${String(index + 1).padStart(2, '0')}`,
  amount: (Math.random() * 1000).toFixed(2),
  mineral: index % 2 === 0 ? 'Gold' : 'Copper',
}));

function AnalyticsScreen() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('minerals');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // Get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = sampleTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Total pages
  const totalPages = Math.ceil(sampleTransactions.length / transactionsPerPage);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pie chart data
  const pieData = {
    labels: ['Gold', 'Copper', 'Coal', 'Others'],
    datasets: [
      {
        label: 'Mineral Distribution',
        data: [30, 50, 70, 40],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Line chart data
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Royalties Over Time',
        data: [120000, 150000, 100000, 200000, 180000, 250000],
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales Performance',
        data: [300, 400, 350, 500],
        backgroundColor: '#FFCE56',
      },
    ],
  };

  // Trend data for yearly growth
  const trendData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Yearly Growth',
        data: [120, 150, 200],
        backgroundColor: '#4BC0C0',
      },
    ],
  };

  return (
    <div>
      <Card>
        <h2 className="text-center mb-4">Analytics Overview</h2>
      </Card>

      {/* Navigation Links */}
      <Nav className="justify-content-center mb-4" variant="tabs">
        <Nav.Item>
          <Nav.Link active={activeTab === 'minerals'} onClick={() => setActiveTab('minerals')}>Minerals Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={activeTab === 'distribution'} onClick={() => setActiveTab('distribution')}>Minerals Distribution</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={activeTab === 'sales'} onClick={() => setActiveTab('sales')}>Sales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={activeTab === 'transactions'} onClick={() => setActiveTab('transactions')}>Transactions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={activeTab === 'graphs'} onClick={() => setActiveTab('graphs')}>Graphs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={activeTab === 'charts'} onClick={() => setActiveTab('charts')}>Charts</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'minerals' && (
        <Row className="mt-4">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Total Mining Transactions</Card.Title>
                <Card.Text>
                  <h3>1,234</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Mineral Distribution</Card.Title>
                <Pie data={pieData} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Royalties Over Time</Card.Title>
                <Line data={lineData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {activeTab === 'distribution' && (
        <Row>
          <Col md={12}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Map of Malawi Showing Mines</Card.Title>
                <MapContainer center={[-13.2543, 34.3015]} zoom={6} style={{ height: '400px', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                  />
                  {mineLocations.map((mine, index) => (
                    <Marker key={index} position={[mine.lat, mine.lng]} icon={customMarker}>
                      <Popup>{mine.name}</Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {activeTab === 'sales' && (
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Sales</Card.Title>
                <Card.Text>
                  <h3>500 Units</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Sales Performance by Quarter</Card.Title>
                <Bar data={barData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {activeTab === 'transactions' && (
        <Row>
          <Col md={12}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Transaction Details</Card.Title>
                <ul>
                  {currentTransactions.map((transaction) => (
                    <li key={transaction.id}>
                      {transaction.date}: ${transaction.amount} - {transaction.mineral}
                    </li>
                  ))}
                </ul>
                <Pagination>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                      key={index}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {activeTab === 'graphs' && (
        <Row>
          <Col md={12}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Growth Trends</Card.Title>
                <Line data={trendData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {activeTab === 'charts' && (
        <Row>
          <Col md={12}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Graphical Representation</Card.Title>
                {/* Additional charts can be added here */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default AnalyticsScreen;
