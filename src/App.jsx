import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts'
import { Container } from 'react-bootstrap'

class App extends Component {

  render() {
    return (

      <div className="App">
        <Container>
          <Contacts>
          </Contacts>
        </Container>
      </div>
    );
  };

}

export default App;