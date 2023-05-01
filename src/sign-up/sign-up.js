import React from "react";
import './sign-up.css';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {Button, Container, Card, Col, Form, Row } from "react-bootstrap";
export default function SignUp() {
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
                            <Card.Text>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type='email'
                                                      placeholder='Email address'
                                                      className='formControl' />
                                        <Form.Control type='name'
                                                      placeholder='Username'
                                                      className='formControl' />
                                        <Form.Control type='password'
                                                      placeholder='Password'
                                                      className='formControl' />
                                        <Form.Control type='password'
                                                      placeholder='Confirm password'
                                                      className='formControl' />
                                    </Form.Group>
                                    <Button variant='warning'
                                            className='signUpButton'
                                            type='submit'>
                                        CREATE AN ACCOUNT
                                    </Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}