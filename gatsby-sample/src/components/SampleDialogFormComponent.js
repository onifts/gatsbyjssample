import React, { useState, useEffect } from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const initStateInput = {
        
    inputValue : '',
    errors : {
        inputValue : '',
    }

} // end initStateInput

const SampleDialogFormComponent = ({

    openDialogForm,
    handleDialogFormClose,

    title,
    inputLabel,
    inputValue,
    inputMinLength,
    eventId

} ) => {

    const [ stateInput, setStateInput ] = useState(initStateInput);

    const handleUpdate = (event) => {

        event.preventDefault();

        const { name, value } = event.target;

        const { inputValue, errors } = stateInput;

        var error = '';

        switch (name) {

            case 'inputValue': 
                error = (value.length >= inputMinLength) ? '' : 'Invalid '+inputLabel+'. Please try again.';
                break;
            default:
                break;
        
        } // end switch 

        setStateInput({
        
            inputValue : name === 'inputValue' ? value : inputValue,
            errors : {
                inputValue : name === 'inputValue' ? error : errors.inputValue,
            }
        });

    } // emd handleUpdate
        
    useEffect(() => {

        setStateInput( { ...stateInput, inputValue : inputValue } );

        setStateInput( { ...stateInput, errors : { ...stateInput.errors, inputValue : inputValue === '' ? ' ' : '' } } );
  
    }, [openDialogForm]); // end useEffect

    return (
        
        <div>
            
            <Dialog open={openDialogForm} onClose={handleDialogFormClose} aria-labelledby="form-dialog-title" fullWidth={true} >
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                <DialogContent>

                    <div>
                        <TextField id="inputValue" name="inputValue" label={inputLabel} type="text" defaultValue={inputValue} required autoFocus onChange={handleUpdate} fullWidth />
                    </div>
                    {stateInput.errors.inputValue.length > 0 && <span className='error'>{stateInput.errors.inputValue}</span>}<span>{'\u00A0'}</span>

                </DialogContent>
                <DialogActions>
                    <Button id="cancel" color="primary" onClick={handleDialogFormClose} >
                        CANCEL
                    </Button>
                    <Button id={eventId} color="primary" onClick={(e) => handleDialogFormClose( e, stateInput )}>
                        SAVE
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    
    ); // return 

} // end SampleDialogFormComponent

export default SampleDialogFormComponent;
