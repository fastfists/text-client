import React, { Component } from 'react';
import '../App.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default class Bar extends Component {
    
    send_message(e){
        var message = document.getElementById('message').value;
        console.log(this.props.number);
        console.log(message);
        axios.post(`https://fastfist.pythonanywhere.com/send/${this.props.number}/${message}`)
    }

    render() {
        return (
            <>
                <Form onSubmit={e => this.send_message(e)}>
                    <Form.Group>
                        <Row noGutters={true}>
                            <Col md="auto">
                                <Button size="lg" md="auto" type="submit" onClick={e => this.send_message(e)}>
                                    Send
                                </Button>
                            </Col>
                            <Col>
                                <Form.Control md="auto" id="message" placeholder="Enter text" />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </>);
            }
}

