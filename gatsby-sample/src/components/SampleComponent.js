
import React, { useState, useEffect } from 'react';

const SampleComponent = () => {
    
    const [state, setState] = useState({ name:'', loading:true });

    const { name, loading } = state;

    useEffect(() => {
        
        console.log('[1] first rendering ... ', state);

    },[]); // end useEffect

    useEffect(() => {
        
        if ( loading ) {
        
            setState( { ...state, loading : false } );

            console.log('[2] after component update ... [componentDidMount]', state);
            
        }
        else {
        
            console.log('[4] after component update ... [componentDidUpdate]', state);
        
        } // end if 

        return () => {

            console.log('[3] before component update ... [componentWillUpdate]', state);

        }; // end return 

    },[name]); // end useEffect

    const onChangeInput = e => {
        
        setState( { ...state, [e.target.name] : e.target.value } );

    }; // end onChangeInput

    return (
        <>
           <input name="name" value={name} onChange={onChangeInput} />
           <div>UserName : {name}</div>
        </>
    );

} // end SampleComponent

export default SampleComponent;

