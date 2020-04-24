
import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';

import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import EmojiRenderCommonComponent from './common/EmojiRenderCommonComponent';

function insertHTMLAtCaret(html) {

    var sel, range;
    
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // non-standard and not supported in all browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
    }
    
} // end insertHTMLAtCaret

const EmojiComponent = () => {
    
    const [state, setState] = useState({ name:'', loading:false });

    const { name, loading } = state;

    const onChangeInput = e => {
        
        e.preventDefault();

        console.log('[2]',e.currentTarget.innerText)

        // setState( { ...state, name : e.currentTarget.innerText, loading : false } );

        handleSetMessage();

    }; // end onChangeInput

    const onOpenEmoji = e => {

        setState( { ...state, loading : !state.loading } );

    }; // end onChangeInput

    const addEmoji = e => {

        // let emoji = e.native;

        let sym = e.unified.split('-')
        let codesArray = []
        sym.forEach(el => codesArray.push('0x' + el))
        let emoji = String.fromCodePoint(...codesArray)//'<span role="img" >'+String.fromCodePoint(...codesArray)+'</span>'
        
        // console.log( emoji, sym, codesArray )

        var emoji__ = `<img alt="`+emoji+`" src="https://twemoji.maxcdn.com/v/12.1.5/72x72/`+sym+`.png" 
            style="width: 1em; height: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;" />`
        
        insertHTMLAtCaret(emoji__)

        handleSetMessage();

    };

    const handleSetMessage = () => {
        
        const message = document.getElementById("message").childNodes;

        var message__ = ""

        for(var i = 0; i < message.length; i++) {

            if( message[i].tagName == 'IMG' ) {
                message__ += message[i].getAttribute("alt");
            }
            else {
                message__ += message[i].nodeValue;
            }
        
        } // end for 

        // console.log(message__)

        setState( { ...state, name : message__ } );

    } // end handleSetMessage

    return (
        <>

            <div>
                {String.fromCodePoint(0x1F97A)}
                https://emojipedia.org/
            </div>
            <div>[1] : {name}</div>
            <div>[2] : {<EmojiRenderCommonComponent>{name}</EmojiRenderCommonComponent>}</div>
            <div>
                <div id="message" name="message" contentEditable onInput={onChangeInput} style={{border:'1px dashed'}} ></div>
                <textarea value={name} readOnly></textarea>
            </div>

            <IconButton color="primary" aria-label="upload picture" component="span" onClick={onOpenEmoji}>
                <InsertEmoticonIcon />
            </IconButton>

            {loading && 
            <div><Picker onSelect={addEmoji} set='twitter' /></div>
            }

            {/* <div>
                <Picker onSelect={addEmoji} title='' emoji='' 
                    style={{ position: 'absolute', bottom: '20px', right: '20px', width:'90%' }} 
                    emojiTooltip={false} set='twitter' 
                />
            </div> */}

        </>
    );

} // end EmojiComponent

export default EmojiComponent;
