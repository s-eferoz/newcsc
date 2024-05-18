// Import necessary React components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layout';

import AboutPage from './about';
import CodefestPage from './codefest';
import CouncilPage from './council';

// Main App Component
const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/codefest" component={CodefestPage} />
          <Route path="/" component={CouncilPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
