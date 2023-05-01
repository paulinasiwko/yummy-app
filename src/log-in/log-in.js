import React from "react";
import './log-in.css';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {Button, Container, Card, Col, Form, Row } from "react-bootstrap";

export default function LogIn() {
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
                            <Card.Text>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type='email'
                                                      placeholder='Email address'
                                                      className='formControl' />
                                        <Form.Control type='password'
                                                      placeholder='Password'
                                                      className='formControl' />
                                    </Form.Group>
                                    <Button variant='warning'
                                            className='logInButton'
                                            type='submit'>
                                        LOGIN
                                    </Button>
                                </Form>
                                <p className='registerText'>Don't have an account?{' '}
                                    <Link to={'/sign-up'}>Register here</Link>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}