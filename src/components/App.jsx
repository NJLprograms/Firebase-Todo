
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import React, {useState} from 'react';
import { Router, navigate } from '@reach/router';
import Navigation from './Navigation';
import Home from './Home'
import Login from './Login';
import Todo from './Todo';
import Register from './Register';

const App = () => {
  const [user, editUser] = useState({displayName:"Bob", userID:1});
  return (
  <div>
    <Navigation user={null}/>
    <Router>
      <Home path='/' user={null}/>
      <Login path='/login'/>
      <Todo path='/todo'/>
      <Register path='/register'/>
    </Router>
  </div>
  );
}

export default App;
