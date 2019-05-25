import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ChatDisplay from "./ChatDisplay"

export default class Contacts extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        this.setContacts();
    }

    async setContacts() {
        const res = await axios.get('http://fastfist.pythonanywhere.com/get_updated');
        const contacts = res.data.data;
        this.setState({ "contacts": contacts });
        console.log(contacts);
    }

    render() {
        console.log(this.props);
        return (
            <>
                <ChatDisplay number={"2144028404"}/>
            </>
        );

    }
}
