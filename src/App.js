import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Actions from './Actions/actions'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
          <Home />
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
