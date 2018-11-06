import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header.js";
import NavBar from "./NavBar/NavBar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default App;
