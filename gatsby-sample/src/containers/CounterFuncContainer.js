import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import Counter from '../components/SampleCoponents/CounterSampleComponent';

const { increment, decrement } = actions.CounterAction;

/*
const CounterFuncContainer = ( { number, increment, decrement } ) => {

    const handleIncrement = () => {
        increment() ;
    }

    const handleDecrement = () => {
        decrement () ;
    }

    return (
        <>
            <Counter 
                number={number}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
        </>
    ) ;
    
} // end CounterFuncContainer
*/

const mapStateToProps = ( state ) => ({
    
    number: state.CounterReducer.number, 
    
});

//const mapDispatchToProps = {increment, decrement}
const mapDispatchToProps = dispatch => ({
    onIncrement : (param)=> dispatch(increment(param)),
    onDecrement : ()=> dispatch(decrement())
});

//export default connect ( mapStateToProps, mapDispatchToProps )(CounterFuncContainer); 
export default connect ( mapStateToProps, mapDispatchToProps )(Counter); 
