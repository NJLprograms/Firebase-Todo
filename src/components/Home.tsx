import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form, Nav, Jumbotron, ListGroup } from 'react-bootstrap';
import { store } from '../redux/store';
import { firestore } from '../utils/Firebase';

const Home = () => {
  const [user, setUser] = useState(store.getState().user);
  const [show, toggleShow] = useState(false);
  const [priority, setPriority] = useState<string | null>(null);
  const [taskName, setName] = useState<string | null>(null);
  const [description, setDesc] = useState<string | null>(null);
  const [todos, setTodo] = useState<any[]>([]);
  store.subscribe(() => {
    setUser(store.getState().user);
  });
  const createToDo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firestore()
      .collection('users')
      .doc(user.uid || undefined)
      .collection('todos')
      .add({
        taskName,
        description,
        priority,
        createdOn: firestore.Timestamp.now(),
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error: any) => {
        console.error('Error writing document: ', error);
      });
  };

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('todos')
      .orderBy('createdOn', 'desc')
      .onSnapshot((snapshot) => {
        const tasks = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setTodo(tasks);
      });
  }, [user?.uid]);
  console.log(todos);
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
            {!user && (
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href="/register" className="btn btn-outline-primary">
                    Register
                  </Nav.Link>
                  <br />
                  <Nav.Link href="/login" className="btn btn-outline-primary">
                    Login
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            )}

            {user && (
              <Jumbotron style={{ backgroundColor: 'white' }}>
                {!!todos.length && (
                  <ListGroup>
                    {todos.map((task) => {
                      console.log(taskName);
                      return <ListGroup.Item key={task?.id}>{task?.taskName}</ListGroup.Item>;
                    })}
                  </ListGroup>
                )}
                <br />
                {!show && (
                  <Button
                    onClick={() => {
                      toggleShow(true);
                    }}
                  >
                    Create a Todo
                  </Button>
                )}
                {show && (
                  <div>
                    <Form onSubmit={createToDo}>
                      <Form.Group controlId="Name">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                          onChange={(event: any) => {
                            setName(event.target.value);
                          }}
                          placeholder="Task"
                        />
                      </Form.Group>
                      <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          onChange={(event: any) => {
                            setDesc(event.target.value);
                          }}
                          placeholder="What is it?"
                        />
                      </Form.Group>
                      <Form.Group
                        onChange={(event: any) => {
                          setPriority(event.target.value);
                          console.log(event.target.value);
                        }}
                        placeholder="What is it?"
                        controlId="Priority"
                      >
                        <Form.Check name="priority" type="radio" value="High" label="High" />
                        <Form.Check name="priority" type="radio" value="Medium" label="Medium" />
                        <Form.Check name="priority" type="radio" value="Low" label="Low" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                )}
              </Jumbotron>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
