import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormError from './FormError';
import { auth } from '../utils/Firebase';
import { navigate } from '@reach/router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page from refreshing on submit
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else if (password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          if (error.messsage !== null) {
            setError(error.message);
          } else {
            setError(null);
          }
        })
        .then(() => {
          navigate('/');
        });
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

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
