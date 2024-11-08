// import React, { useState, useEffect } from 'react';
// import { Card, Row, Col, Container, Table, Button, Form, Toast } from 'react-bootstrap';
// import { FaUser, FaUsers, FaEdit, FaPlus, FaArchive } from 'react-icons/fa';
// import axios from 'axios';

// const UserManagementScreen = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({
//     id: null,
//     userId: "",
//     username: "",
//     walletAddress: "",
//     licenseNumber: "",
//     licenseType: "",
//   });
//   const [showUserForm, setShowUserForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [showToast, setShowToast] = useState(false);

//   useEffect(() => {
//     fetchUsers(); // Fetch users when the component mounts
//   }, []);

//   //handle input change
//   // Handle input changes
// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setNewUser((prevUser) => ({
//     ...prevUser,
//     [name]: value,
//   }));
// };


//   // Fetch users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/manage_users'); // Ensure this matches your endpoint
//       setUsers(response.data); // Assuming response.data is an array of users
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       showToastMessage("Error fetching users!");
//     }
//   };

//   // Show toast message
//   const showToastMessage = (message) => {
//     setToastMessage(message);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000); // Auto-hide after 3 seconds
//   };

//   // Add or edit user
//   const handleAddUser = async () => {
//     if (newUser.userId && newUser.username && newUser.walletAddress && newUser.licenseNumber && newUser.licenseNumber && newUser.licenseType) {
//       try {
//         if (isEditing) {
//           // Edit existing user
//           const response = await axios.put(`http://localhost:4000/manage_users/${newUser.id}`, newUser);
//           setUsers(users.map((user) => (user.id === newUser.id ? response.data : user)));
//           showToastMessage("User updated successfully!");
//         } else {
//           // Add new user
//           const response = await axios.post('/api/manage_users', newUser);
//           setUsers([...users, { id: response.data.id, ...newUser }]);
//           showToastMessage("User added successfully!");
//         }
//         resetForm();
//       } catch (error) {
//         console.error('Error adding or updating user:', error);
//         showToastMessage("Error adding/updating user!");
//       }
//     } else {
//       showToastMessage("Please fill in all fields!");
//     }
//   };

//   // Edit user
//   const handleEditUser = (user) => {
//     setNewUser(user);
//     setIsEditing(true);
//     setShowUserForm(true);
//   };

//   // Archive user
//   const handleArchiveUser = async (userId) => {
//     try {
//       await axios.delete(`http://localhost:4000/manage_users/${userId}`); // Ensure this matches your endpoint
//       setUsers(users.filter((user) => user.id !== userId));
//       showToastMessage("User archived successfully!");
//     } catch (error) {
//       console.error('Error archiving user:', error);
//       showToastMessage("Error archiving user!");
//     }
//   };

//   // Reset the form
//   const resetForm = () => {
//     setNewUser({
//       id: null,
//       userId: "",
//       username: "",
//       walletAddress: "",
//       licenseNumber: "",
//       licenseType: "",
//     });
//     setIsEditing(false);
//     setShowUserForm(false);
//   };

//   return (
//     <div className="user-management-screen">
//       <Container fluid>
//         <Card className="shadow-sm mb-4">
//           <h3 className="text-center mb-4">User Management</h3>
//         </Card>

//         <Row className="mb-4">
//           <Col md={8}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title className="text-primary mb-4">
//                   <FaUsers size={24} className="me-2" />
//                 </Card.Title>
//                 <Button 
//                   Users
//                   variant="primary" 
//                   className="mb-3"
//                   onClick={() => setShowUserForm(true)}
//                 >
//                   <FaPlus size={16} className="me-2" />
//                   Add User
//                 </Button>
//                 <Table striped bordered hover responsive>
//                   <thead>
//                     <tr>
//                       <th>User ID</th>
//                       <th>Username</th>
//                       <th>Wallet Address</th>
//                       <th>License Number</th>
//                       <th>License Type</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.map((user) => (
//                       <tr key={user.id}>
//                         <td>{user.userId}</td>
//                         <td>{user.username}</td>
//                         <td>{user.walletAddress}</td>
//                         <td>{user.licenseNumber}</td>
//                         <td>{user.licenseType}</td>
//                         <td>{user.role}</td>
//                         <td>
//                           <Button variant="warning" className="me-2" onClick={() => handleEditUser(user)}>
//                             <FaEdit size={16} />
//                           </Button>
//                           <Button variant="secondary" onClick={() => handleArchiveUser(user.id)}>
//                             <FaArchive size={16} />
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </Card.Body>
//             </Card>
//           </Col>

//           {showUserForm && (
//             <Col md={4}>
//               <Card className="shadow-sm">
//                 <Card.Body>
//                   <Card.Title className="text-primary mb-4">
//                     <FaUser size={24} className="me-2" />
//                     {isEditing ? "Edit User" : "Add User"}
//                   </Card.Title>
//                   <Form>
//                     <Form.Group className="mb-3">
//                       <Form.Label>User ID</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter user ID"
//                         name="userId"
//                         value={newUser.userId}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Username</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter username"
//                         name="username"
//                         value={newUser.username}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>Wallet Address</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter wallet address"
//                         name="walletAddress"
//                         value={newUser.walletAddress}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>License Number</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter license number"
//                         name="licenseNumber"
//                         value={newUser.licenseNumber}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                       <Form.Label>License Type</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter license type"
//                         name="licenseType"
//                         value={newUser.licenseType}
//                         onChange={handleInputChange}
//                       />
//                     </Form.Group>
//                     <Button variant="primary" onClick={handleAddUser}>
//                       {isEditing ? "Update User" : "Add User"}
//                     </Button>
//                     <Button variant="secondary" className="ms-2" onClick={resetForm}>
//                       Cancel
//                     </Button>
//                   </Form>
//                 </Card.Body>
//               </Card>
//             </Col>
//           )}
//         </Row>
//       </Container>

//       {/* Toast notification */}
//       <Toast
//         show={showToast}
//         onClose={() => setShowToast(false)}
//         delay={3000}
//         autohide
//         style={{ position: 'absolute', top: 20, right: 20 }}
//       >
//         <Toast.Body>{toastMessage}</Toast.Body>
//       </Toast>
//     </div>
//   );
// };

// export default UserManagementScreen;
import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container, Table, Button, Form, Toast, Modal } from 'react-bootstrap';
import { FaUser, FaUsers, FaEdit, FaPlus, FaArchive } from 'react-icons/fa';
import axios from 'axios';

const UserManagementScreen = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    id: null,
    userId: "",
    username: "",
    walletAddress: "",
    licenseNumber: "",
    licenseType: "",
  });
  const [showUserForm, setShowUserForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal visibility
  const [userToDelete, setUserToDelete] = useState(null); // User to be deleted

  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleAddUser = async () => {
    if (newUser.userId && newUser.username && newUser.walletAddress && newUser.licenseNumber && newUser.licenseType) {
      try {
        if (isEditing) {
          // Edit existing user
          const response = await axios.put(`http://localhost:4000/manage_users/${newUser.id}`, newUser);
          setUsers(users.map((user) => (user.id === newUser.id ? response.data : user)));
          showToastMessage("User updated successfully!");
        } else {
          // Add new user
          const response = await axios.post('/api/manage_users', newUser);
          setUsers([...users, { id: response.data.id, ...newUser }]);
          showToastMessage("User added successfully!");
        }
        resetForm();
      } catch (error) {
        // Log the error to the console or send it to a logging service like Sentry
        console.error("Error adding/updating user:", error);
        showToastMessage(error.response?.data?.message || "Error adding/updating user!");
  
        // Optionally, log the error to an external service, e.g., Sentry
        // Sentry.captureException(error);
      }
    } else {
      showToastMessage("Please fill in all fields!");
    }
  };
  
  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/manage_users'); // Ensure this matches your endpoint
      setUsers(response.data); // Assuming response.data is an array of users
    } catch (error) {
      console.error('Error fetching users:', error);
      showToastMessage(error.response?.data?.message || "Error fetching users!");
    }
  };

  // Show toast message
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Auto-hide after 3 seconds
  };

  // Add or edit user
  // const handleAddUser = async () => {
  //   if (newUser.userId && newUser.username && newUser.walletAddress && newUser.licenseNumber && newUser.licenseType) {
  //     try {
  //       if (isEditing) {
  //         // Edit existing user
  //         const response = await axios.put(`http://localhost:4000/manage_users/${newUser.id}`, newUser);
  //         setUsers(users.map((user) => (user.id === newUser.id ? response.data : user)));
  //         showToastMessage("User updated successfully!");
  //       } else {
  //         // Add new user
  //         const response = await axios.post('/api/manage_users', newUser);
  //         setUsers([...users, { id: response.data.id, ...newUser }]);
  //         showToastMessage("User added successfully!");
  //       }
  //       resetForm();
  //     } catch (error) {
  //       console.error('Error adding or updating user:', error);
  //       showToastMessage(error.response?.data?.message || "Error adding/updating user!");
  //     }
  //   } else {
  //     showToastMessage("Please fill in all fields!");
  //   }
  // };

  // Edit user
  const handleEditUser = (user) => {
    setNewUser(user);
    setIsEditing(true);
    setShowUserForm(true);
  };

  // Archive user (with confirmation modal)
  const handleArchiveUser = (user) => {
    setUserToDelete(user); // Set the user to be deleted
    setShowDeleteModal(true); // Show the confirmation modal
  };

  // Confirm delete user
  const confirmDeleteUser = async () => {
    try {
      if (userToDelete) {
        await axios.delete(`http://localhost:4000/manage_users/${userToDelete.id}`);
        setUsers(users.filter((user) => user.id !== userToDelete.id)); // Remove user from state
        showToastMessage("User archived successfully!");
        setShowDeleteModal(false); // Close the modal after deletion
      }
    } catch (error) {
      console.error('Error archiving user:', error);
      showToastMessage(error.response?.data?.message || "Error archiving user!");
      setShowDeleteModal(false); // Close modal even if deletion fails
    }
  };

  // Reset the form
  const resetForm = () => {
    setNewUser({
      id: null,
      userId: "",
      username: "",
      walletAddress: "",
      licenseNumber: "",
      licenseType: "",
    });
    setIsEditing(false);
    setShowUserForm(false);
  };

  // Static check for admin role (assuming this is set somewhere, e.g., from session/token)
  const isAdmin = true; // Set to `true` if the logged-in user is an admin, otherwise `false`.

  return (
    <div className="user-management-screen">
      <Container fluid>
        <Card className="shadow-sm mb-4">
          <h3 className="text-center mb-4">User Management</h3>
        </Card>

        <Row className="mb-4">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaUsers size={24} className="me-2" />
                </Card.Title>
                {isAdmin && (
                  <Button 
                    variant="primary" 
                    className="mb-3"
                    onClick={() => setShowUserForm(true)}
                  >
                    <FaPlus size={16} className="me-2" />
                    Add User
                  </Button>
                )}
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Username</th>
                      <th>Wallet Address</th>
                      <th>License Number</th>
                      <th>License Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.userId}</td>
                        <td>{user.username}</td>
                        <td>{user.walletAddress}</td>
                        <td>{user.licenseNumber}</td>
                        <td>{user.licenseType}</td>
                        {isAdmin && user.role !== 'admin' && ( // Disable archive button for admin users
                          <td>
                            <Button variant="warning" className="me-2" onClick={() => handleEditUser(user)}>
                              <FaEdit size={16} />
                            </Button>
                            <Button variant="secondary" onClick={() => handleArchiveUser(user)}>
                              <FaArchive size={16} />
                            </Button>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {showUserForm && (
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary mb-4">
                    <FaUser size={24} className="me-2" />
                    {isEditing ? "Edit User" : "Add User"}
                  </Card.Title>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>User ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter user ID"
                        name="userId"
                        value={newUser.userId}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={newUser.username}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Wallet Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter wallet address"
                        name="walletAddress"
                        value={newUser.walletAddress}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>License Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter license number"
                        name="licenseNumber"
                        value={newUser.licenseNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>License Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter license type"
                        name="licenseType"
                        value={newUser.licenseType}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Button variant="primary" onClick={handleAddUser}>
                      {isEditing ? "Save Changes" : "Add User"}
                    </Button>
                    <Button variant="secondary" onClick={resetForm} className="ms-2">
                      Cancel
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

        <Toast show={showToast} onClose={() => setShowToast(false)} className="position-fixed bottom-0 end-0 m-3">
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Archive</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to archive this user? This action cannot be undone.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDeleteUser}>
              Archive User
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default UserManagementScreen;
