import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ChatDisplay from "./ChatDisplay"
import { ListGroup, Col, Row } from 'react-bootstrap';
import { SideBar } from './SideBar';
export default class Contacts extends Component {

    state = {
        contacts: [],
        number: "2144028404"
    }

    componentDidMount() {
        this.setContacts();
    }

    async setContacts() {
        const res = await axios.get('http://fastfist.pythonanywhere.com/get_updated');
        const contacts = res.data.data;
        this.setState({ "contacts": contacts });
    }

    setNumber = (number) => {
        console.log("setting state");
        console.log(number);
        this.setState({ 'number': number });
    }


    render() {
        console.log(this.props);
        return (
            <>
                <Row>
                    <Col md="4" >
                        <SideBar contacts={this.state.contacts} setNumber={this.setNumber} />
                    </Col>
                    <Col>
                        <ChatDisplay number={"14697740422"} />
                    </Col>
                </Row>
            </>
        );

    }
}
