
import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';

import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import EmojiRenderCommonComponent from './common/EmojiRenderCommonComponent';

const EmojiComponent = () => {
    
    const [state, setState] = useState({ name:'', loading:false });

    const { name, loading } = state;

    const onChangeInput = e => {
        
        e.preventDefault();

        setState( { ...state, name : e.target.value, loading : false } );

        console.log('onChangeInput',state,e.target.value)

    }; // end onChangeInput

    const onOpenEmoji = e => {
          
        if ( state.loading ) {
            setState( { ...state, loading : false } );
        }
        else {
            setState( { ...state, loading : true } );
        }
        
        console.log('onOpenEmoji',state)

    }; // end onChangeInput

    const onCloseEmoji = e => {
          
        setState( { ...state, loading : false } );

    }; // end onChangeInput

    const addEmoji = e => {

        // let emoji = e.native;

        let sym = e.unified.split('-')
        let codesArray = []
        sym.forEach(el => codesArray.push('0x' + el))
        let emoji = String.fromCodePoint(...codesArray)//'<span role="img" >'+String.fromCodePoint(...codesArray)+'</span>'
        
        console.log( emoji, sym, codesArray )

        //setState({
        //    text: state.text + emoji
        //});

        setState( { ...state, name : state.name + emoji } );

        // console.log('addEmoji',state)

    };

    return (
        <>

            
            <div>
                <div>[1] : {name}</div>
                <div>[2] : <EmojiRenderCommonComponent>{name}</EmojiRenderCommonComponent></div>
                <input name="name" value={name} onChange={onChangeInput} onFocus={onCloseEmoji}/>
            </div>

            <IconButton color="primary" aria-label="upload picture" component="span" onClick={onOpenEmoji}>
                <InsertEmoticonIcon />
            </IconButton>

            {state.loading && 
            <div><Picker onSelect={addEmoji} /></div>
            }

            <div>
                <Picker onSelect={addEmoji} title='' emoji='' 
                    style={{ position: 'absolute', bottom: '20px', right: '20px', width:'90%' }} 
                    emojiTooltip={false} set='twitter' 
                />
            </div>

        </>
    );

} // end EmojiComponent

export default EmojiComponent;
