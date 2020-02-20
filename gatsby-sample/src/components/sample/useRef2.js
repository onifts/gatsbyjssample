import React, { useRef } from 'react';

const RefSample = () => {
  
    const id = useRef(1);
  
    const setId = (n) => {
      id.current = n;
    }
  
    const printId = () => {
      console.log(id.current);
    }
  
    return (
      <div>
        refsample
      </div>
    );
};