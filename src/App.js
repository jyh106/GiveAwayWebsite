import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Actions from './Actions/actions.js'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NewGiveAway from './Components/NewFormPage/NewFormPage.js';
import PostPage from './Components/PostPage/PostPage.js';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/newGiveAway" component={NewGiveAway}></Route>
              <Route path="/post/:postID" component={PostPage}></Route>
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
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appMounted: () => dispatch(Actions.appMounted())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
