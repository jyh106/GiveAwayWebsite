import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Actions from './Actions/actions.js'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import UserPage from './UserPage/UserPage';
import NewGiveAway from './Components/NewForm/NewForm.js';
import AboutPage from "./Components/About/About.js";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route exact path="/myPage" component={UserPage}></Route>
            <Route exact path="/newGiveAway" component={NewGiveAway}></Route>
          </div>
        </BrowserRouter>
    );
  }

  componentDidMount(){
    this.props.appMounted();
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    appMounted: () => dispatch(Actions.appMounted())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
