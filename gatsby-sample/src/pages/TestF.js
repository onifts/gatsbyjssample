import React, { Component } from 'react';

import './App.css';

import CounterClassContainer from '../containers/CounterClassContainer.js' ;

class TestF extends Component {
  render() {
    return (
      <div className="App">
        <CounterClassContainer  />
      </div>
    );
  }

} // end TestF

export default TestF;
