import React from 'react';

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

class ClassSampleComponent extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            
            message : props.name,

        }
        
    } // end constructor

    handleUpdate(event) {

        this.setState( { ...this.state, message : event.currentTarget.value } );

    } // end handleUpdate

    render() {
        
        return  (
            <div>
                <Header/>
                <Content name={this.props.name} say={this.props.say} />
                {this.props.name}<br />
                Message : {this.state.message}<br />
                <input type="text" value={this.state.message} onChange={(e) => this.handleUpdate(e)} />
            </div>
        
        ); // end return
        
    } // end render

} // end ClassSampleComponent

ClassSampleComponent.propTypes = {
    name : PropTypes.string.isRequired,
}

ClassSampleComponent.defaultProps = {
    say : 'I am a class component!!',
}

export default ClassSampleComponent;
