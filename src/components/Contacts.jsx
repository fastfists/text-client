import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'

class Contacts extends Component {
    state = {
        contacts: []
    }

    
    componentDidMount() {
        this.setContacts();
    }

    async setContacts() {
        console.log("hi");
        const res = await axios.get('http://fastfist.pythonanywhere.com/get_contacts');
        console.log(res);
        const contacts = res.data.data;
        this.setState({ contacts });
        console.log(contacts);
    }

    render() {
        console.log(this.props);
        
        return (
            <ul>
                {this.state.contacts.map(number =>
                    <li>
                        {number}
                    </li>
                )}
            </ul>
        );
    }
}

export default Contacts;