import React, { useEffect } from 'react';

const test52 = () => {

    const AAA = () => {

        const onHover = () => {

            alert('ok!');
    
        }
    
        useEffect(() => {
    
            document.getElementById("here").addEventListener("mouseenter", onHover);
    
        }, []); // end useEffect
    
        return (
            <div style={{border:'1px solid', height:'200px'}}>
                <div style={{border:'1px solid', height:'100px', width:'100px', margin:'10px'}} id="here" >
    
                </div>
            </div>
        );

    }
    
    return (

        <AAA />
    );

} // end TestF

export default test52;
