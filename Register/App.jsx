import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

import Login from './components/LoginPage/Login';
import Register from './components/RegisterPage/Register';
import Centra from '../Centra/src/App'; 
import Admin from '../MoralmAdmin/src/App';
import Home from '../XYZ-FE-main/src/Home'; 

function RouterComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        if (email.includes('@admin.com')) {
            navigate('/admin');
        } else if (email.includes('@centra.com')) {
            navigate('/centra');
        } else if (email.includes('@xyz.com')) {
            navigate('/xyz');
        } else {
            navigate('/');
        }
      }
    });
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/centra" element={<Centra />} />
      <Route path="/xyz" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
