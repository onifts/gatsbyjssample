import React, { Component } from 'react';
import Ellipsis from 'react-animated-ellipsis' ;

import './test6.css';

class test6 extends Component {

    render() {
        return (
            
            <div>
                <div>Loading<Ellipsis /></div>
                <div class="loading">Loading</div>
            </div>

        );
    }

} // end test6

export default test6;
