import React from "react";
import { Container, Row, Col, Card, Table, Form, Button, InputGroup } from "react-bootstrap";
import { Line, Pie, Bar } from "react-chartjs-2";
import MinFooter from './../../../../web3/logic/MinFooter';
import { FaSearch } from "react-icons/fa";

const SalesScreen = () => {
  // Mock data for charts
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue Over Time",
        data: [5000, 10000, 7500, 15000, 20000],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const pieChartData = {
    labels: ["Gold", "Silver", "Copper"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#FFD700", "#C0C0C0", "#B87333"],
      },
    ],
  };

  const barChartData = {
    labels: ["Customer A", "Customer B", "Customer C"],
    datasets: [
      {
        label: "Top Customers",
        data: [15000, 12000, 8000],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  // Mock data for transactions table
  const transactions = [
    { id: 1, customer: "Customer A", mineral: "Gold", quantity: 10, price: 1500, status: "Completed", timestamp: "2024-11-06" },
    { id: 2, customer: "Customer B", mineral: "Silver", quantity: 20, price: 30, status: "Pending", timestamp: "2024-11-05" },
    { id: 3, customer: "Customer C", mineral: "Copper", quantity: 15, price: 200, status: "Failed", timestamp: "2024-11-04" },
  ];

  return (
    <Container fluid>
      {/* Top Navigation */}
      <Row className="my-3">
        <Col md={4}>
          <InputGroup>
            <Form.Control placeholder="Search transactions..." />
            <Button variant="outline-secondary" >
              <FaSearch/>
            </Button>
          </InputGroup>
        </Col>
        <Col md={{ span: 4, offset: 4 }} className="text-end">
          <Button variant="primary" className="me-2">Filter</Button>
          <Button variant="outline-secondary">Export</Button>
        </Col>
      </Row>

      {/* KPI Cards */}
      <Row>
        <Col md={3}>
          <Card className="p-3 text-center">
            <h5>Total Sales Value</h5>
            <h3>$50,000</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <h5>Total Volume Sold</h5>
            <h3>45 Tons</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <h5>Average Sale Price</h5>
            <h3>$1,200</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <h5>Pending Sales</h5>
            <h3>3</h3>
          </Card>
        </Col>
      </Row>

      {/* Charts Section */}
      <Row className="my-4">
        <Col md={6}>
          <Card className="p-3">
            <h5>Revenue Over Time</h5>
            <Line data={lineChartData} />
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3">
            <h5>Mineral Distribution</h5>
            <Pie data={pieChartData} />
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3">
            <h5>Top Customers</h5>
            <Bar data={barChartData} />
          </Card>
        </Col>
      </Row>

      {/* Transactions Table */}
      <Row>
        <Col>
          <Card className="p-3">
            <h5>Transactions</h5>
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Customer</th>
                  <th>Mineral</th>
                  <th>Quantity (Tons)</th>
                  <th>Price ($)</th>
                  <th>Total Value ($)</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.customer}</td>
                    <td>{transaction.mineral}</td>
                    <td>{transaction.quantity}</td>
                    <td>{transaction.price}</td>
                    <td>{transaction.quantity * transaction.price}</td>
                    <td>{transaction.status}</td>
                    <td>{transaction.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    <MinFooter/>
    </Container>
  
  );
};

export default SalesScreen;
