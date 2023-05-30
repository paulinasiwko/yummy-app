import React, { useState} from "react";
import './sign-up.css';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {Button, Container, Card, Col, Form, Row, Alert} from "react-bootstrap";

export default function SignUp() {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [nameArea, setNameArea] = useState('');
    const [emailArea, setEmailArea] = useState('');
    const [passwordArea, setPasswordArea] = useState('');
    const [confirmPasswordArea, setConfirmPasswordArea] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [passwordMatching, setPasswordMatching] = useState(false);

    function handleNameChange(e) {
       setNewUser({
           ...newUser,
           name: e.target.value
       });
       setNameArea(e.target.value);
    }
    function handleEmailChange(e) {
        setNewUser({
            ...newUser,
            email: e.target.value
        });
        setEmailArea(e.target.value);
    }

    function handlePasswordChange(e) {
        setNewUser({
            ...newUser,
            password: e.target.value
        });
        setPasswordArea(e.target.value);
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPasswordArea(e.target.value);
    }

    function handleRegister() {
        if (newUser.name.length && newUser.email.length && newUser.password.length > 0 && passwordArea === confirmPasswordArea) {
            fetch("http://localhost:8080/register", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newUser.name,
                    email: newUser.email,
                    password: newUser.password
                })
            })
                .then((res) => res.json())
                .then(res => console.log(res));

            setNameArea('');
            setEmailArea('');
            setPasswordArea('');
            setConfirmPasswordArea('');
            setPasswordMatching(false);
            setIsEditing(true);
        } else if (passwordArea !== confirmPasswordArea) {
            setPasswordMatching(true);
        }
    }

        return(
        <Container fluid>
            <Row>
                <Col sm='7' className='signUpImage'>
                    <Link to={'/'}>
                        <FaArrowLeft size='25'
                                     className='goBackArrow' />
                    </Link>
                </Col>
                <Col sm='5'>
                    <Card className='signUpCard'>
                        <Card.Body>
                            <Card.Title className='signUpText'>
                                Sign Up Now
                            </Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type='email'
                                                      placeholder='Email address'
                                                      className='formControl'
                                                      value={emailArea}
                                                      required
                                                      onChange={handleEmailChange}/>
                                        <Form.Control type='text'
                                                      placeholder='Username'
                                                      className='formControl'
                                                      value={nameArea}
                                                      required
                                                      onChange={handleNameChange}/>
                                        <Form.Control type='password'
                                                      placeholder='Password'
                                                      className='formControl'
                                                      value={passwordArea}
                                                      required
                                                      onChange={handlePasswordChange}/>
                                        <Form.Control type='password'
                                                      placeholder='Confirm password'
                                                      className='formControl'
                                                      value={confirmPasswordArea}
                                                      required
                                                      onChange={handleConfirmPasswordChange}/>
                                    </Form.Group>
                                    {isEditing ? (
                                        <Alert variant={"success"}
                                               className='formControl'>
                                            Account created!
                                        </Alert>
                                    ) : (<div />)}
                                    {passwordMatching ? (
                                        <Alert variant={"danger"}
                                               className='formControl'>
                                            The password is not maching.
                                        </Alert>
                                    ) : (<div />)}
                                    <Button variant='warning'
                                            className='signUpButton'
                                            type='submit'
                                            onClick={handleRegister}>
                                        CREATE AN ACCOUNT
                                    </Button>
                                </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}