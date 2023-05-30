import React, {useState} from "react";
import './log-in.css';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {Button, Container, Card, Col, Form, Row } from "react-bootstrap";

export default function LogIn() {
    const [logInEmail, setLogInEmail] = useState('');
    const [logInPassword, setLogInPassword] = useState('');
    const [loggedUser, setLoggedUser] = useState('');

    function handleLogInEmail(e) {
        setLogInEmail(e.target.value);
    }

    function handleLogInPassword(e) {
        setLogInPassword(e.target.value);
    }

    function handleLogIn() {
        fetch("http://localhost:8080/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: logInEmail,
                password: logInPassword
            })
        })
            .then((res) => res.json())
            .then(res => console.log(res));

        setLogInEmail('');
        setLogInPassword('');
    }

    return(
        <Container fluid>
            <Row>
                <Col sm='7' className='logInImage'>
                    <Link to={'/'}>
                        <FaArrowLeft size='25'
                                     className='goBackArrow' />
                    </Link>
                </Col>
                <Col sm='5'>
                    <Card className='logInCard'>
                        <Card.Body>
                            <Card.Title className='logInText'>
                                Log In
                            </Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type='email'
                                                      placeholder='Email address'
                                                      value={logInEmail}
                                                      onChange={handleLogInEmail}
                                                      className='formControl' />
                                        <Form.Control type='password'
                                                      placeholder='Password'
                                                      value={logInPassword}
                                                      onChange={handleLogInPassword}
                                                      className='formControl' />
                                    </Form.Group>
                                    <Button variant='warning'
                                            className='logInButton'
                                            onClick={handleLogIn}
                                            type='submit'>
                                        LOGIN
                                    </Button>
                                </Form>
                                <p className='registerText'>Don't have an account?{' '}
                                    <Link to={'/sign-up'}>Register here</Link>
                                </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}