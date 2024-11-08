import {React} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSideBar from '../dashboard/admin/components/AdminSideBar';
import VerifierSideBar from '../dashboard/verifier/components/VerifierSideBar';
import UserSideBar from '../dashboard/user/components/UserSideBar';
import GuestSideBar  from './../dashboard/guest/components/GuestSideBar';

const Authenticator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminSideBar/>} />
        <Route path="/user" element={<UserSideBar />} />
        <Route path="/verifier" element={<VerifierSideBar />} />
        <Route path='guest' element={<GuestSideBar />}/>
      </Routes>
    </Router>
  );
};

export default Authenticator;

