import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header.js";
import NavBar from "./NavBar/NavBar.js";
import PostBoard from './PostBoard/PostBoard.js';
import PostForm from './PostForm/PostForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <PostBoard />
        <PostForm />
      </div>
    );
  }
}

export default App;
