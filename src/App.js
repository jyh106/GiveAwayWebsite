import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Actions from './Actions/actions'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import UserPage from './UserPage/UserPage';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/myPage" component={UserPage}></Route>
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
