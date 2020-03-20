import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import Counter from '../components/SampleCoponents/CounterSampleComponent';

const { increment, decrement } = actions.CounterAction;

class CounterClassContainer extends Component { //3
    
    constructor(props) {
        
        super(props);

        this.state = {
            valueNew : 0 
        };
        
    } // end constructor

    handleIncrement = () => {
        this.props.increment() ;
    }

    handleDecrement = () => {
        this.props.decrement () ;
    }

    handleIncrementValue = () => {

        this.setState( { ...this.state, valueNew : this.state.valueNew+1 } );

    } // end handleIncrementValue

    handleDecrementValue = () => {

        this.setState( { ...this.state, valueNew : this.state.valueNew-1 } );

    } // end handleDecrementValue

    render() {
        
        const { number } = this.props;

        return (
            <>
                <Counter 
                    number={number}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                <Counter 
                    number={this.state.valueNew}
                    onIncrement={this.handleIncrementValue}
                    onDecrement={this.handleDecrementValue}
                />
            </>
        ) ;
    } 

} // end CounterClassContainer

const mapStateToProps = ( {CounterReducer} ) => ({
    
    number: CounterReducer.number, 
    
});

const mapDispatchToProps = {increment, decrement}

export default connect (  mapStateToProps, mapDispatchToProps )(CounterClassContainer); // connect to store ( status, action )
//export default connect (  mapStateToProps )(CounterClassContainer); // connect to store ( status, action )
//export default connect (  null, mapDispatchToProps )(CounterClassContainer); // connect to store ( status, action )
