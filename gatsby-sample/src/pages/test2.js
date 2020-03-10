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

const Test = () => {
    
    const classes = useStyles();

    const [ openDialogForm, setOpenDialogForm ] = useState(false);
    const [ stateUserInfo, setStateUserInfo ] = useState({username:''});

    const handleDialogFormOpen = ( event ) => {

        event.preventDefault();
        
        setOpenDialogForm(true);
        
    }; // end handlePopMenuOpen
  
    const handleDialogFormClose = ( event, param ) => {
  
        event.preventDefault();
        
        if ( event.currentTarget.id === 'userinfo' ) {
            
            setStateUserInfo( { ...stateUserInfo, username: param.inputValue } );

        } // end if 

        setOpenDialogForm(false);

    }; // end handlePopMenuClose

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

