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
