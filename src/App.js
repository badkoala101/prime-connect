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
import Signin from './pages/Signin';
import VerifyId from './pages/verifyId/VerifyId';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpsw" element={<Forgotpsw />} />        
          <Route path="/checkemail" element={<CheckEmail />} />    
          <Route path="/resetpsw" element={<ResetPsw />} />        
          <Route path="/authentication" element={<Authentication/>} />         
          <Route path="/Signin" element={<Signin />} />
          <Route path="/verifyid" element={<VerifyId />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Notification" element={<Notification />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
