import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import SampleDialogFormComponent from "../components/SampleDialogFormComponent"

const useStyles = makeStyles(theme => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}));

const validateForm = (errors) => {
  
    let valid = true;
    
    Object.values(errors).forEach( (val) => val.length > 0 && (valid = false) );
    
    return valid;
  
} // end validateForm

const initStateUserInfo = {
    
    username : ''

};

const Test = () => {
    
    const classes = useStyles();

    const [ stateUserInfo, setStateUserInfo ] = useState(initStateUserInfo);
    const [ openDialogForm, setOpenDialogForm ] = useState(false);
    
    const handleDialogFormOpen = ( event ) => {

        event.preventDefault();
        
        setOpenDialogForm(true);
        
    }; // end handleDialogFormOpen
  
    const handleDialogFormClose = ( event, param ) => {
  
        event.preventDefault();
        
        if( param !== undefined && param.inputValue !== undefined ) {

            if( !validateForm(param.errors) ) {
          
                alert('Please input a valid value.');
                return;
                
            } // end if 
    
            if ( event.currentTarget.id === 'userinfo' ) {
                
                setStateUserInfo( { ...stateUserInfo, username: param.inputValue } );
    
            } // end if 

        } // end if 

        setOpenDialogForm(false);

    }; // end handleDialogFormClose

    return (

        <div className={classes.root}>

            <Button variant="contained" color="primary" onClick={handleDialogFormOpen}>User Info</Button>
            User Name : {stateUserInfo.username}
            <SampleDialogFormComponent 
            
                openDialogForm={openDialogForm}
                handleDialogFormClose={handleDialogFormClose}

                title="User Info"
                inputLabel="User Name"
                inputValue={stateUserInfo.username}
                inputMinLength="2"
                eventId="userinfo"

            />
        </div>
    );
}

export default Test;

