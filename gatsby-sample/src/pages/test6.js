import React, { Component } from 'react';
import Ellipsis from 'react-animated-ellipsis' ;

// component (other,custom)  
import AnimatedEllipsisCommonComponent from '../components/common/AnimatedEllipsisCommonComponent';

class test6 extends Component {

    render() {
        return (
            
            <div>
                <div>Loading<Ellipsis /></div>
                <AnimatedEllipsisCommonComponent >Typing</AnimatedEllipsisCommonComponent>
            </div>

        );
    }

} // end test6

export default test6;
