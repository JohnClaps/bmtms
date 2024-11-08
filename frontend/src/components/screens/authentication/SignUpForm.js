  // import React, { useState } from "react";
  // import { Form, Button, Container } from "react-bootstrap";
  // import axios from "axios";
  // import { useNavigate } from "react-router-dom";
  // import "bootstrap/dist/css/bootstrap.min.css";
  
  // export default function SignUpForm() {
  //   const [formData, setFormData] = useState({
  //     userId: "",
  //     username: "",
  //     walletAddress: "",
  //     licenseNumber: "",
  //     licenseType: ""
  //   });
  //   const navigate = useNavigate();
  
  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value
  //     });
  //   };
  
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  
  //     try {
  //       // Make POST request using Axios
  //       const response = await axios.post("http://localhost:4000/submit", formData);
  
  //       // Check for success response
  //       if (response.status === 201) {
  //         alert("Account created successfully");
          
  //         // Redirect based on user's role
  //         const userRole = response.data.role;
  //         if (userRole === "admin") {
  //           navigate("/admin");
  //         } else if (userRole === "verifier") {
  //           navigate("/verifier");
  //         } else if (userRole === "user") {
  //           navigate("/user");
  //         } else {
  //           alert("Unknown role. Please contact support.");
  //         }
  
  //         // Reset form after successful submission
  //         setFormData({
  //           userId: "",
  //           username: "",
  //           walletAddress: "",
  //           licenseNumber: "",
  //           licenseType: ""
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Failed to register successfully:", error);
  
  //       // Check if the error has a response from the server
  //       if (error.response) {
  //         alert(`Failed to create an account: ${error.response.data.message || "Unknown error"}`);
  //       } else {
  //         alert("An error occurred while creating your account. Please try again.");
  //       }
  //     }
  //   };
  
  //   return (
  //     <Container>
  //       <h3>Create an Account</h3>
  //       <Form onSubmit={handleSubmit}>
  //         <Form.Group controlId="formUserId">
  //           <Form.Label>User ID</Form.Label>
  //           <Form.Control
  //             type="text"
  //             placeholder="Enter your user ID"
  //             name="userId"
  //             value={formData.userId}
  //             onChange={handleInputChange}
  //             required
  //           />
  //         </Form.Group>
  
  //         <Form.Group controlId="formUsername">
  //           <Form.Label>Username</Form.Label>
  //           <Form.Control
  //             type="text"
  //             placeholder="Enter your username"
  //             name="username"
  //             value={formData.username}
  //             onChange={handleInputChange}
  //             required
  //           />
  //         </Form.Group>
  
  //         <Form.Group controlId="formWalletAddress">
  //           <Form.Label>Wallet Address</Form.Label>
  //           <Form.Control
  //             type="text"
  //             placeholder="Enter your wallet address"
  //             name="walletAddress"
  //             value={formData.walletAddress}
  //             onChange={handleInputChange}
  //             required
  //           />
  //         </Form.Group>
  
  //         <Form.Group controlId="formLicenseNumber">
  //           <Form.Label>License Number</Form.Label>
  //           <Form.Control
  //             type="text"
  //             placeholder="Enter your license number"
  //             name="licenseNumber"
  //             value={formData.licenseNumber}
  //             onChange={handleInputChange}
  //             required
  //           />
  //         </Form.Group>
  
  //         <Form.Group controlId="formLicenseType">
  //           <Form.Label>License Type</Form.Label>
  //           <Form.Control
  //             type="text"
  //             placeholder="Select your license type"
  //             name="licenseType"
  //             value={formData.licenseType}
  //             onChange={handleInputChange}
  //             required
  //           />
  //         </Form.Group>
  //         <Button variant="primary" type="submit">
  //           Submit
  //         </Button>
  //       </Form>
  //     </Container>
  //   );
  // }
  import React, { useState } from "react";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    userId: "",
    username: "",
    walletAddress: "",
    licenseNumber: "",
    licenseType: ""
  });
  const [loading, setLoading] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start spinner

    try {
      // Make POST request using Axios
      const response = await axios.post("http://localhost:4000/submit", formData);

      if (response.status === 201) {
        // Display welcome message
        setWelcomeMessage("Welcome! Redirecting you to your dashboard...");
        
        // Hold for 2 seconds to show welcome message
        setTimeout(() => {
          const userRole = response.data.role;
          if (userRole === "admin") {
            navigate("/admin");
          } else if (userRole === "verifier") {
            navigate("/verifier");
          } else if (userRole === "user") {
            navigate("/user");
          } else {
            alert("Unknown role. Please contact support.");
          }

          // Reset form after successful submission
          setFormData({
            userId: "",
            username: "",
            walletAddress: "",
            licenseNumber: "",
            licenseType: ""
          });
          setLoading(false);
          setWelcomeMessage(""); // Clear message
        }, 2000); // 2-second delay
      }
    } catch (error) {
      console.error("Failed to register successfully:", error);
      setLoading(false); // Stop spinner

      // Error handling
      if (error.response) {
        alert(`Failed to create an account: ${error.response.data.message || "Unknown error"}`);
      } else {
        alert("An error occurred while creating your account. Please try again.");
      }
    }
  };

  return (
    <Container>
      <h3>Create an Account</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUserId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your user ID"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formWalletAddress">
          <Form.Label>Wallet Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your wallet address"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLicenseNumber">
          <Form.Label>License Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your license number"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLicenseType">
          <Form.Label>License Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Select your license type"
            name="licenseType"
            value={formData.licenseType}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? (
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          ) : (
            "Submit"
          )}
        </Button>
      </Form>

      {welcomeMessage && (
        <Alert variant="success" className="mt-3">
          {welcomeMessage}
        </Alert>
      )}
    </Container>
  );
}
