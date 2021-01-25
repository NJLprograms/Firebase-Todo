import React from 'react';
import {Nav} from 'react-bootstrap'

const Home = (user) => {
    return(
        <div>
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-10 col-md-10 col-lg-8 col-xl-7">
                        <h4 class="display-4 text-primary mt-3 mb-2">Your To-Do List</h4>
                        <p class="lead">
                            This simple webapp creates tasks, allows you to set priority,
                            and saves created tasks to user profiles. Simply an example
                            of a Single Page Application made for practice.
                        </p>
                        <Nav className="justify-content-center">
                            {user&& (
                                <Nav.Item>
                                    <Nav.Link href="/register" className="btn btn-outline-primary"> Register </Nav.Link>
                                    <br/>
                                    <Nav.Link href="/login" className="btn btn-outline-primary"> Login </Nav.Link>
                                </Nav.Item>
                            )}

                            {/* {user && (
                                <Nav.Item>
                                    <Nav.Link href="/todo" className="btn btn-outline-primary"> Create a Todo </Nav.Link>
                                </Nav.Item>
                            )} */}
                        </Nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;