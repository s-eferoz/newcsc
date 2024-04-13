// Import necessary React components and React Router
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import About from './about';
import Codefest from './codefest';
import Council from './council';

// Main App Component with Routing
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/codefest" element={<Codefest />} />
        <Route path="/council" element={<Council />} />
        {/* Add more routes as needed */}
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
