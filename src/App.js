import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Notification from './pages/Notification';
import './App.css';
import Signup from './components/user/signup/Signup';
import Forgotpsw from './components/user/forgot_psw/Forgotpsw';
import CheckEmail from './components/user/emailcheck/CheckEmail';
import ResetPsw from './components/user/resetpsw/ResetPsw';
import Authentication from './components/user/authentication/Authentication';
import Signin from './components/user/signin/Signin';
import VerifyId from './pages/verifyId/VerifyId';
import Sidebar from './components/Sidebar';
import Item from './pages/Item';
import DiasporaBanking from './pages/coopproducts/Diasporabanking';
import ProtectedRooute from './ProtectedRooute';
import Product from './pages/Product';
import Faq from './pages/Faq';
import Documentation from './pages/Documentation';
import Profile from './pages/Profile';
import Souqpass from './pages/coopproducts/Souqpass';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ManageUsers from './pages/Admin/ManageUsers';
import AdminLogin from './pages/Admin/AdminLogin';
import ViewUsers from './pages/Admin/ViewUsers';
import ViewUserDetail from './pages/Admin/ViewUserDetail';
import ManageLoanApplication from './pages/Admin/ManageLoanApplication';


import MichuHome from './pages/coopproducts/Michu/MichuHome';
import LoanApplication from './pages/coopproducts/Michu/LoanApplication';
import MichuLoan from './pages/coopproducts/Michu/MichuLoan';
import BalanceQuery from './pages/coopproducts/coopay/CheckBalance';
import CoopayHome from './pages/coopproducts/coopay/CoopayHome';
import AccountTransfer from './pages/coopproducts/coopay/AccountTransfer';
import SendMoney from './pages/coopproducts/coopay/SendMoney';
import LoanDashboard from './pages/coopproducts/Michu/LoanDashboard';
import DebooHome from './pages/coopproducts/Deboo/DebooHome';
import DebooCampaign from './pages/coopproducts/Deboo/DebooCampaign';
import DebooDashboard from './pages/coopproducts/Deboo/DebooDashboard';
import DebooContribute from './pages/coopproducts/Deboo/DebooContribute';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const isAdminAuthenticated = !!localStorage.getItem('adminToken'); // For admin authentication

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<Forgotpsw />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/product" element={<Product />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/adminlogin" element={<AdminLogin />} />

          {/* Protected User Routes */}
          <Route element={<ProtectedRooute isAuthenticated={isAuthenticated} />}>
            <Route path="/checkemail" element={<CheckEmail />} />
            <Route path="/resetpsw" element={<ResetPsw />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/verifyid" element={<VerifyId />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/items" element={<Item />} />
            <Route path="/michu" element={<MichuHome />} />
            <Route path="/apply-loan" element={<LoanApplication />} />
            <Route path="/michu-loan" element={<MichuLoan />} />
            <Route path="/diaspora-banking" element={<DiasporaBanking />} />
            <Route path="/profile" element={<Profile />} />

            <Route exact path="/coopay" element={<CoopayHome />} />
            <Route exact path="/check-balance" element={<BalanceQuery />} />
            <Route exact path="/transfer-money" element={<AccountTransfer />} />
            <Route exact path="/send-money" element={<SendMoney />} />
            
            <Route path="/deboo" element={<DebooHome />} />
            <Route path="/deboo-campaign" element={<DebooCampaign />} />
            <Route path="/deboo-dashboard" element={<DebooDashboard />} />
            <Route path="/deboo-contribute" element={<DebooContribute />} />


          {/* </Route> */}
          
                      <Route path="/souqpass" element={<Souqpass />} />
            <Route path="/loandashboard" element={<LoanDashboard />} />
          </Route>

          {/* Admin Routes (Protected) */}
          {/* <Route element={<ProtectedRooute isAuthenticated={isAdminAuthenticated} />}> */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/viewusers" element={<ViewUsers />} />
            <Route path="/view-user-detail/:id" element={<ViewUserDetail />} />
            <Route path="/manage-loan-application" element={<ManageLoanApplication />} />
            
            
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;