
import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';

const ChatComponent = ( { data, status, loading, success, error, chatAddMessage, chatDelMessage, chatListMessages } ) => {
    
    const [ message, setMessage ] = useState('');

    const onChangeInput = (event) => {
        
        event.preventDefault();

        setMessage( event.target.value );

    } // end onChangeInput

    const handleSendMessage = (event) => {
        
        event.preventDefault();

        const temp = (message.trim()).replace(/(?:\r\n|\r|\n)/g, '\n');

        chatAddMessage( { chatgroupid : 17, username: '', photo : '', message : temp } );
        
        //console.log(data);

    } // end handleSendMessage

    const handleLoadMessages = async (event) => {
        
        event.preventDefault();

        try {
            
            await chatListMessages( { userid:5, chatgroupid:5, chatid:0 } );

            console.log('요청이 완료 된 다음에 실행됨');

        } catch(e) {
            
            console.log('에러가 발생!');

        }
        
    } // end handleSendMessage

    useEffect(() => {
        
        console.log(loading, success, error)
        
    }); // end useEffect

    return (
        <>
            <div>{message}</div>

            <Paper component="form" method="post" onSubmit={(e) => {handleSendMessage(e)}}>

            <input type="text" name="name" value={message} onChange={onChangeInput} />
            <input type="button" value="load" onClick={handleLoadMessages} />

            <div>
            { loading && 'Loading ...' }
            { error && 'Error!!' }
            { success && data.map((element, index) => (
                
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
