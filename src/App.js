// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BarChart from './components/BarChart';
import LightGloves from './components/LightGloves';
import Trees from './components/Trees';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BarChart />} />
        <Route path="/lightgloves" element={<LightGloves />} />
        <Route path="/Tree" element={<Trees />} />
      </Routes>
    </Router>
  );
};

export default App;
