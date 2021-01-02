import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import { Card, ListGroup } from 'react-bootstrap';
import TextBar from './TextBar'
import Scroll from './ScrollBar';

export default class ChatDisplay extends Component {

    constructor() {
        super();
       this.state = {
            number: "",
            messages: []
        }
    }

    componentDidUpdate() {
        this.setMessages();
    }

    async setMessages() {
        var res = await axios.get(`https://fastfist.pythonanywhere.com/fetch_thread/${this.props.number}`)
        var message_thread = res.data.data.messages;
        this.setState({ "messages": message_thread });
    }

    render() {
        return (
            <>
                <br /><br />
                <Card>
                    <h3> <center> {this.props.number}</center></h3><hr/>
                    <Scroll style={{ height: 600 }}>
                    <ListGroup>
                        {this.state.messages.map(message =>
                            <div>
                                {message.sender === "19725970085" ? (
                                    <ListGroup.Item className="message message-right" align="left">{message.text}</ListGroup.Item>
                                ) : (
                                        <ListGroup.Item className="message message-left" align="left">{message.text}</ListGroup.Item>
                                    )
                                }
                            </div>
                        )}
                    </ListGroup>
                    </Scroll>
                    <hr />
                    <TextBar setMessages={this.setMessages.bind(this)} number={this.props.number} />
                </Card>
            </>
        )
    }
}
