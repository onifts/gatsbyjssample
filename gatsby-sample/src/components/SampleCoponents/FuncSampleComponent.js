import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Header from './ClassSampleHeaderComponent';

class Content extends React.Component {
    
    render(){
        return (
            <div>
                <h2>{this.props.say}</h2>
                <p>created by {this.props.name}</p>
            </div>
        );
    }

} // end Content

const FuncSampleComponent = ({name,say}) => {

    const [state, setState] = useState({
            
        message : name,

    });

    const handleUpdate = (event) => {

        setState( { ...state, message : event.currentTarget.value } );

    } // end handleUpdate

    return  (
        <div>
            <Header/>
            <Content name={name} say={say} />
            {name}<br />
            Message : {state.message}<br />
            <input type="text" value={state.message} onChange={(e) => handleUpdate(e)} />
        </div>
    
    ); // end return
    
} // end FuncSampleComponent

FuncSampleComponent.propTypes = {
    name : PropTypes.string.isRequired,
}

FuncSampleComponent.defaultProps = {
    say : 'I am a functional component!!',
}

export default FuncSampleComponent;
