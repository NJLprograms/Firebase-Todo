import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { store } from '../redux/store';

const Navigation = () => {
  const { user } = store.getState();
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/"> Home </Navbar.Brand>
        {user && (
          <Nav className="mr-auto">
            <Nav.Item> Welcome {user.displayName} </Nav.Item>
            <Nav.Link href="logout"> Log Out </Nav.Link>
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
