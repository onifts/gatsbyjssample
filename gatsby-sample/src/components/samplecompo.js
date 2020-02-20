
import React, { useState, useEffect } from 'react';

const Samplecompo = () => {
    
    const [state, setState] = useState({ name:'', loading:true });

    const { name, loading } = state;

    useEffect(() => {
        
        console.log('[1] first rendering ... ', name);

    },[]);

    useEffect(() => {
        
        if ( loading ) {
        
            console.log('[2] after component update ... [componentDidMount]', name);
            //setState({name:'',loading:false});
            setState( { ...state, loading : false } );

        }
        else {
        
            console.log('[4] after component update ... [componentDidUpdate]', name);
        
        } // end if 

        return () => {

            console.log('[3] before component update ... [componentWillUpdate]', name);

        }; // end return 

    },[name]);

    const onChangeInput = e => {
        
        //console.log(e.target.name, e.target.value);
        //setState({name:e.target.value,loading:false});
        setState( { ...state, [e.target.name] : e.target.value } );

    };

    return (
        <>
           <input name="name" value={name} onChange={onChangeInput} />
           <div>UserName : {name}</div>
        </>
    );

} // end Samplecompo

export default Samplecompo;

