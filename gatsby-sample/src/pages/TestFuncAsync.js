import React, { Component } from 'react';

import './App.css';

import CounterFuncAsyncContainer from '../containers/CounterFuncAsyncContainer' ;

class TestFuncAsync extends Component {
  render() {
    return (
      <div className="App">
        <CounterFuncAsyncContainer  />
      </div>
    );
  }

} // end TestFuncAsync

export default TestFuncAsync;
