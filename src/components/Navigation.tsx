import React from 'react';
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { store } from '../redux/store';
import { logout } from '../utils/UserAuth';

const Navigation = () => {
  const [user, setUser] = useState(null);
  store.subscribe(() => {
    setUser(store.getState().user);
  });

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/"> Home </Navbar.Brand>
        {user && (
          <Nav className="mr-auto">
            <Nav.Item> Welcome </Nav.Item>
            <Nav.Link onClick={logout}> Log Out </Nav.Link>
          </Nav>
        )}

        {!user && (
          <Nav className="mr-auto">
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="login">Log In</Nav.Link>
          </Nav>
        )}
      </Navbar>
    </div>
  );
};

export default Navigation;
