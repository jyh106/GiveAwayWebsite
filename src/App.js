import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'
import {BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
        <div>
          <Home />
        </div>
    );
  }
}

export default App;
