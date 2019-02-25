import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Actions from './Actions/actions.js'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import UserPage from './UserPage/UserPage';
import NewGiveAway from './Components/NewFormPage/NewFormPage.js';
import PostPage from './Components/PostPage/PostPage.js';
import Settings from "./Components/Settings/Settings.js";
import UserAccount from './Components/UserAccountPage/UserAccountPage.js';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={AboutPage}></Route>
              <Route exact path="/myPage" component={UserPage}></Route>
              <Route exact path="/newGiveAway" component={NewGiveAway}></Route>
              <Route path="/post/:postID" component={PostPage}></Route>
              <Route path="/settings" component={Settings}></Route>
              <Route exact path="/account" component={UserAccount}></Route>
            </Switch>
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
