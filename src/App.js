import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Signup from './components/user/signup/Signup';
import Forgotpsw from './components/user/forgot_psw/Forgotpsw';
import CheckEmail from './components/user/emailcheck/CheckEmail';
import ResetPsw from './components/user/resetpsw/ResetPsw';
import Authentication from './components/user/authentication/Authentication';



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
        
        </Routes>

      </div>
    </Router>
  );
};

export default App;
