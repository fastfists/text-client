import React, { Component } from 'react';
import '../App.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default class Bar extends Component {
    
    send_message(e){
        e.preventDefault();
        console.log("sending message")
        var element = document.getElementById('message');
        var message = element.value;
        element.value = "";
        console.log(this.props.number);
        console.log(message);
        this.props.setMessages();
        axios.get(`https://fastfist.pythonanywhere.com/send/${this.props.number}/${message}`)
    }

    render() {
        return (
            <>
                <Form noValidate={true} onSubmit={e =>this.send_message(e)}>
                    <Form.Group>
                        <Row noGutters={true}>
                            <Col md="auto">
                                <Button size="lg" type="submit"  md="auto" onClick={e => this.send_message(e)}>
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

