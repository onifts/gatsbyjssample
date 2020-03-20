import React, { Component } from 'react';

import './App.css';

import CounterFuncContainer from '../containers/CounterFuncContainer' ;

class TestFunc extends Component {
  render() {
    return (
      <div className="App">
        <CounterFuncContainer  />
      </div>
    );
  }

} // end TestFunc

export default TestFunc;
