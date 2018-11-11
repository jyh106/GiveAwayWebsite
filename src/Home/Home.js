import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import PostBoard from '../PostBoard/PostBoard.js';
import Modal from "../Modal/Modal.js";
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <NavBar />
                <PostBoard />
                <Modal />
                {(this.props.isModalShown) ? <div className="page-mask"></div> : null}
             </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isModalShown: state.AppReducer.get('isModalShown'),
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)