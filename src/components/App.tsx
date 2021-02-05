import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import React from 'react';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Routing from './Routing';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navigation />
        <Routing />
      </Provider>
    </div>
  );
};

export default App;
