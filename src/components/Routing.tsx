import { BrowserRouter as Router, Route } from 'react-router-dom';

import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Todo from './Todo';

const Routing = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/todo">
        <Todo />
      </Route>
    </Router>
  );
};

export default Routing;
