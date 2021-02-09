import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormError from './FormError';
import { auth, firestore } from '../utils/Firebase';
import { store } from '../redux/store';
import { UserAction } from '../redux/actions/UserAction';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // prevent page from refreshing on submit
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else if (password === confirmPassword) {
      auth()
        .setPersistence(auth.Auth.Persistence.SESSION)
        .then(async () => {
          const signUpData = await auth().createUserWithEmailAndPassword(email, password);
          store.dispatch(UserAction.Login(signUpData.user));
          await firestore().collection('users').doc(signUpData.user?.uid).set({});
          history.push('/');
        })
        .catch((error) => {
          setError(error.message);
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
