import React from 'react'
import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import UpdateProfile from './UpdateProfile';
import PrivateRouter from './PrivateRouter';
import ForgotPassword from './ForgotPassword';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../Contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    
      <Container className='d-flex align-items-center justify-content-center'
        style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRouter> <Dashboard /> </PrivateRouter>} />
              <Route path='/updateProfile' element={<PrivateRouter> <UpdateProfile /> </PrivateRouter>} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgotPassword' element={<ForgotPassword />} />
              <Route path='/updateProfile' element={<UpdateProfile />} />
            </Routes>
          </AuthProvider>
          </Router>
        </div>
      </Container>
    
  );
}

