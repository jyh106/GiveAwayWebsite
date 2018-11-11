import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import PostBoard from '../PostBoard/PostBoard.js';
import Modal from "../Modal/Modal.js";
import Actions from "../Actions/actions.js"
import './Home.css';



class Home extends Component {
    componentDidMount() {
        this.props.toggleModal(true)
    }

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
        toggleModal: (toggle) => {
            dispatch(Actions.toggleModal(toggle));
        }
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)