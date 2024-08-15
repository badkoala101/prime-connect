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
import Michu from './pages/coopproducts/Michu';
import LoanApplication from './components/digitalproductcomponents/LoanApplication';
import DiasporaBanking from './pages/coopproducts/Diasporabanking';
import ProtectedRooute from './ProtectedRooute';
import Product from './pages/Product';
import Faq from './pages/Faq';

const App = () => {

  const isAuthenticated=!!localStorage.getItem('token');
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />      
          <Route path="/signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/forgot-password" element={<Forgotpsw />} /> 
          <Route path="/Faq" element={<Faq />} />
          <Route path="/product" element={<Product />} />     

           {/*<Route element={<ProtectedRooute isAuthenticated={isAuthenticated} />}>*/}
            <Route path="/checkemail" element={<CheckEmail />} />    
            <Route path="/resetpsw" element={<ResetPsw />} />        
            <Route path="/authentication" element={<Authentication/>} />         
            <Route path="/verifyid" element={<VerifyId />} />
            <Route path="/Dashboard" element={<Dashboard />}/>
            <Route path="/Products" element={<Products />} />
            <Route path="/Notification" element={<Notification />} />
            <Route exact path="/items" element={<Item />} />
            <Route path="/michu" element={<Michu />} />
            <Route path="/apply-loan" element={<LoanApplication />} />
            <Route path="/diaspora-banking" element={<DiasporaBanking />} />
            

          {/*</Route>*/}
          
        </Routes>

      </div>
    </Router>
  );
};

export default App;
