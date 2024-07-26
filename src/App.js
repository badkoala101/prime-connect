import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';
import Signup from './components/user/signup/Signup';
import Signin from './pages/Signin';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
