import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScanningPage from './ScanningPage';
import ReportPage from './ReportPage';
import HomePage from './HomePage'; // Halaman utama jika ada

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scanning" element={<ScanningPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
