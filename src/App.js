import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';

import AboutPage from './about';
import CodefestPage from './codefest';
import CouncilPage from './council';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/codefest" element={<CodefestPage />} />
        <Route path="/council" element={<CouncilPage />} />
      </Routes>
    </Router>
  );
};

export default App;
