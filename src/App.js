import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/header_footer';
import { Login, Register } from './components/auth';
import { NotFound } from './components/pages';

const App = () => {
  return (
    <div>
      <Layout>
        <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
