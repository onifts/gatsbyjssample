
import React from 'react' ;

const CounterSampleComponent = ({ number, onIncrement, onDecrement }) => {
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>onIncrement(2)}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );

} // end CounterSampleComponent

export default CounterSampleComponent;
