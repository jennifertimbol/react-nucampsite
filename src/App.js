import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { CAMPSITES } from './shared/campsites.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }
  render() {
    return (
      <div className="App">
        <Directory />
      </div>
    );
  }
}

export default App;