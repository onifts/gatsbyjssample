import React from "react"
//import Emoji from "react-emoji-render";
import { Twemoji } from 'react-emoji-render';

const EmojiRenderCommonComponent = ({ children, ...rest }) => {

    return (
    
        <Twemoji text={children} />
        
    );

} // end EmojiRenderCommonComponent

export default EmojiRenderCommonComponent
