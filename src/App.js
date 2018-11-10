import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header.js";
import NavBar from "./NavBar/NavBar.js";
import PostBoard from './PostBoard/PostBoard.js';
import PostForm from './PostForm/PostForm.js';
import {BrowserRouter, Route } from 'react-router-dom';


const Home = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <PostBoard />
    </div>
  )
}

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
