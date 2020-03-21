//import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import Counter from '../components/SampleCoponents/CounterSampleComponent';

const { incrementAsync, decrementAsync } = actions.CounterCreateAction;

const mapStateToProps = ( state ) => ({
    
    number : state.CounterCreateReducer.number, 
    
});

const mapDispatchToProps = dispatch => ({
    
    onIncrement : (param)=> dispatch(incrementAsync(param)),
    onDecrement : ()=> dispatch(decrementAsync()),

});

export default connect ( mapStateToProps, mapDispatchToProps )(Counter); 
