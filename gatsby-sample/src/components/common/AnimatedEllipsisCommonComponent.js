import React, { Component } from 'react';

import './AnimatedEllipsisCommonComponent.css';

class AnimatedEllipsisCommonComponent extends Component {

    constructor(props) {
        
        super(props);
        
    } // end constructor

    render() {
        return (
            
            <span className="loading">{this.props.children}</span>

        );
    }

} // end AnimatedEllipsisCommonComponent

export default AnimatedEllipsisCommonComponent;
