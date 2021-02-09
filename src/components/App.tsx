import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import React from 'react';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Todo from './Todo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navigation />

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
      </Provider>
    </div>
  );
};

export default App;
