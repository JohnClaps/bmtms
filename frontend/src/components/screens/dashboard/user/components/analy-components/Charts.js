import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2'; // Import the Line chart component
import axios from 'axios'; // Import axios
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement);

const Charts = () => {
  const [mineralData, setMineralData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch mineral extraction data using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/mineral_extraction');
        setMineralData(response.data);  // Assuming response data is an array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Prepare data for Bar chart
  const barChartData = {
    labels: mineralData.map(item => item.mineralType), 
    datasets: [
      {
        label: 'Mineral Extraction',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: mineralData.map(item => item.extractionAmount), // Example: Assuming `extracted_amount` is a field
      },
    ],
  };

  // Prepare data for Pie chart
  const pieChartData = {
    labels: mineralData.map(item => item.mineraType), // Example: Assuming `mineral_name` is a field
    datasets: [
      {
        label: 'Mineral Distribution',
        data: mineralData.map(item => item.extractionAmount), // Example: Assuming `extracted_amount` is a field
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#9C27B0'],
      },
    ],
  };

  // Prepare data for Line chart
  const lineChartData = {
    labels: mineralData.map(item => item.productionDate), // Assuming `production_date` is a field
    datasets: [
      {
        label: 'Extraction over Time',
        data: mineralData.map(item => item.extractionAmount), // Example: Assuming `extracted_amount` is a field
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  // Line chart options
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        labels: lineChartData.labels,
      },
      y: {
        min: 0,
      },
    },
  };

  return (
    <Row>
      {/* Bar Chart */}
      <Col md={6}>
        <Card className="mb-4">
          <Card.Body>
            <h6>Bar Chart</h6>
            {loading ? (
              <p>Loading data...</p>
            ) : (
              <Bar data={barChartData} options={{ responsive: true }} />
            )}
          </Card.Body>
        </Card>
      </Col>

      {/* Pie Chart */}
      <Col md={6}>
        <Card className="mb-4">
          <Card.Body>
            <h6>Pie Chart</h6>
            {loading ? (
              <p>Loading data...</p>
            ) : (
              <Pie data={pieChartData} options={{ responsive: true }} />
            )}
          </Card.Body>
        </Card>
      </Col>

      {/* Line Chart */}
      <Col md={12}>
        <Card className="mb-4">
          <Card.Body>
            <h6>Mineral Extraction Over Time</h6>
            {loading ? (
              <p>Loading data...</p>
            ) : (
              <Line data={lineChartData} options={chartOptions} />
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Charts;
