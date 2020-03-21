
import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';

const ChatComponent = ( { data, chatAddMessage, chatDelMessage, chatListMessages } ) => {
    
    const [ message, setMessage ] = useState('');

    const onChangeInput = (event) => {
        
        event.preventDefault();

        setMessage( event.target.value );

    } // end onChangeInput

    const handleSendMessage = (event) => {
        
        event.preventDefault();

        const temp = (message.trim()).replace(/(?:\r\n|\r|\n)/g, '\n');

        chatAddMessage( { chatgroupid : 17, username: '', photo : '', message : temp } );
        
    } // end handleSendMessage

    return (
        <>
            <div>{message}</div>

            <Paper component="form" method="post" onSubmit={(e) => {handleSendMessage(e)}}>

            <input name="name" value={message} onChange={onChangeInput} />
            <div>
            {data.map((element, index) => (
                
                <div key={index}>
                    <span>{element.no} : </span> 
                    <span>{element.message} | </span>
                    <span><a href="#" onClick={()=>chatDelMessage(element.no)}>x</a></span>
                </div>
            ))}
            </div>

            </Paper>

        </>
    );

} // end ChatComponent

export default ChatComponent;
