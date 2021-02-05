import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import React from 'react';
import { Router } from '@reach/router';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import Todo from './Todo';
import Register from './Register';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navigation />
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Todo path="/todo" />
          <Register path="/register" />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
