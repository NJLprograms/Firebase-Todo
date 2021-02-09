import React from 'react';
import { useState } from 'react';
import { Button, Form, Nav, Dropdown } from 'react-bootstrap';
import { store } from '../redux/store';
import { firestore } from '../utils/Firebase';

const Home = () => {
  const [user, setUser] = useState(store.getState().user);
  const [show, toggleShow] = useState(false);
  const [priority, setPriority] = useState<string | null>(null);
  const [taskName, setName] = useState<string | null>(null);
  const [description, setDesc] = useState<string | null>(null);
  store.subscribe(() => {
    setUser(store.getState().user);
  });
  const createToDo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firestore()
      .collection('todo')
      .doc(taskName || undefined)
      .set({
        taskName,
        description,
        priority,
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <h4 className="display-4 text-primary mt-3 mb-2">Your To-Do List</h4>
            <p className="lead">
              This simple webapp creates tasks, allows you to set priority, and saves created tasks to
              user profiles. Simply an example of a Single Page Application made for practice.
            </p>
            <Nav className="justify-content-center">
              {!user && (
                <Nav.Item>
                  <Nav.Link href="/register" className="btn btn-outline-primary">
                    Register
                  </Nav.Link>
                  <br />
                  <Nav.Link href="/login" className="btn btn-outline-primary">
                    Login
                  </Nav.Link>
                </Nav.Item>
              )}

              {user && (
                <Nav.Item>
                  <Nav.Link
                    onClick={() => {
                      toggleShow(true);
                    }}
                    className="btn btn-outline-primary"
                  >
                    {!show && `Create a Todo`}
                    {show && (
                      <div>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            View Todos
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Form onSubmit={createToDo}>
                          <Form.Group
                            onChange={(event: any) => {
                              setName(event.target.value);
                            }}
                            controlId="Name"
                          >
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control placeholder="Task" />
                          </Form.Group>

                          <Form.Group
                            onChange={(event: any) => {
                              setDesc(event.target.value);
                            }}
                            controlId="Description"
                          >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                              onChange={(event: any) => {
                                setPriority(event.target.value);
                              }}
                              placeholder="What is it?"
                            />
                          </Form.Group>
                          <Form.Group controlId="Priority">
                            <Form.Check type="radio" label="High" />
                            <Form.Check type="radio" label="Medium" />
                            <Form.Check type="radio" label="Low" />
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </div>
                    )}
                  </Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
