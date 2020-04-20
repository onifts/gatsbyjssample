import React, { Component } from 'react';

// component (other,custom)  
import AnimatedEllipsisCommonComponent from '../components/common/AnimatedEllipsisCommonComponent';

class test7 extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            
            num1 : 0,
            num2 : 0,

        }

        this.inputTimer = this.inputTimer.bind(this);
        this.initNum = this.initNum.bind(this);
        
    } // end constructor

    inputTimer = ( e, num ) => {

        if( num == 1 ) {

            if ( this.state.num1 != 0 ) return;

            this.setState( { ...this.state, num1 : this.state.num1+1 } )
        }
        else {

            if ( this.state.num2 != 0 ) return;
            
            this.setState( { ...this.state, num2 : this.state.num2+1 } )
        }
        
        setTimeout( this.initNum, 8000, num ); // 8s

    }

    initNum = ( num ) => {
        
        if( num == 1 ) {
            this.setState( { ...this.state, num1 : 0 } )
        }
        else {
            this.setState( { ...this.state, num2 : 0 } )
        }

    }

    render() {
        return (
            
            <div>
                
                <div><button onClick={(e)=>this.inputTimer(e,1)}>start</button> : {this.state.num1 > 0 && <AnimatedEllipsisCommonComponent >Typing</AnimatedEllipsisCommonComponent>}</div>
                <div><button onClick={(e)=>this.inputTimer(e,2)}>start</button> : {this.state.num2 > 0 && <AnimatedEllipsisCommonComponent >Typing</AnimatedEllipsisCommonComponent>}</div>
                
            </div>

        );
    }

} // end test7

export default test7;
