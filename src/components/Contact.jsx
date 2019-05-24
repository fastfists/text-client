import React, { useEffect, Component } from 'react';
import './App.css';
import axios from 'axios'

class ChatDisplay extends Component {

    state = {

    }
    componentDidMount(){
        axios.get(`http://fastfist.pythonanywhere.com/fetch_thread/${this.props.number}`)
    }

    render() {
        return (
            <ul>
                {this.state.thread.map(thread =>
                    <li>
                        thread
                        </li>
                )}
            </ul>
        )
        return
    }
}

export default ChatDisplay;