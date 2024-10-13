import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import TokenPage from './pages/TokenPage';
import LearnPage from './pages/LearnPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/learn" element={<LearnPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
