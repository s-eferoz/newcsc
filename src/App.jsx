// Import necessary React components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layout';
import About from './about';
import Codefest from './codefest';
import Council from './council';

// Main App Component
const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/codefest" component={Codefest} />
          <Route path="/" component={Council} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
