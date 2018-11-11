import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'
import PostForm from './PostForm/PostForm.js';
import {BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/newform" component={PostForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
