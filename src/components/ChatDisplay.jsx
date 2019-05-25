import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import { Card, ListGroup } from 'react-bootstrap';
import Bar from './Bar'

export default class ChatDisplay extends Component {

    constructor() {
        super();
        this.state = {
            number: "",
            messages: []
        }
    }

    componentDidMount() {
        this.setContacts();
    }

    async setContacts() {
        var res = await axios.get(`https://fastfist.pythonanywhere.com/fetch_thread/${this.props.number}`)
        var message_thread = res.data.data.messages;
        this.setState({ "messages": message_thread });
        console.log(message_thread);
    }

    render() {
        return (
            <>
                <br /><br />
                <Card>

                    <h3> <center> {this.props.number}</center></h3>
                    {this.state.messages.map(message =>
                        <div>
                            {message.sender === "19725970085" ? (
                                <p class="message message-right" align="left">{message.text}</p>
                            ) : (
                                    <p class="message message-left" align="left">{message.text}</p>
                                )
                            }
                        </div>
                    )}
                    <hr />
                    <Bar number={this.props.number} />
                </Card>
            </>
        )
    }
}
