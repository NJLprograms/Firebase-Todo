import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import FormError from './FormError';
import { auth } from '../utils/Firebase';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // prevent page from refreshing on submit

    console.log(email, password);
    try {
      auth.signInWithEmailAndPassword(email, password).then(() => {
        return <Redirect to="/" />;
      });
    } catch (error) {
      if (error.messsage !== null) {
        setError(error.message);
      } else {
        setError(null);
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form className="mt-3" onSubmit={handleSubmit}>
        {error && <FormError message={error} />}

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
