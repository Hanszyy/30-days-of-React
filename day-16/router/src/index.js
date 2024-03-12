import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Change Switch to Routes
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes> {/* Change Switch to Routes */}
      <Route exact path="/" element={<Home />} /> 
      <Route path="/profile" element={<Profile />} /> 
      <Route path="/settings" element={<Settings />} /> 
    </Routes> 
  </Router>
);
