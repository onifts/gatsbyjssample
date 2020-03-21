//import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import ChatComponent from '../components/ChatComponent';

const { chatAddMessage, chatDelMessage, chatListMessages } = actions.ChatAction;

const mapStateToProps = ( state ) => ({
    
    data: state.ChatReducer.messages, 
    
});

const mapDispatchToProps = dispatch => ({
    
    chatAddMessage : (data)=> dispatch(chatAddMessage(data)),
    chatDelMessage : (id)=> dispatch(chatDelMessage(id)),
    chatListMessages : (id)=> dispatch(chatListMessages(id)),

});

export default connect ( mapStateToProps, mapDispatchToProps )(ChatComponent); 
