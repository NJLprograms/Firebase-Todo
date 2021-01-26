import {Button, Form, Nav} from 'react-bootstrap';

const Login = () => {
    return(
        <div style={{display:'flex', justifyContent:"center"}}>
            <Form className="mt-3" > 
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Nav.Item>
                    <Nav.Link href="/" className="btn btn-outline-primary"> Submit </Nav.Link>
                </Nav.Item>
            </Form> 
        </div>
    )
}

export default Login;