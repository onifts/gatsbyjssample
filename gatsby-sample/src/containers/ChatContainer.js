//import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

import ChatComponent from '../components/ChatComponent';

const { chatAddMessage, chatDelMessage, chatListMessages, CHAT_LOAD_MESSAGES } = actions.ChatPenderAction;//actions.ChatAction;

const mapStateToProps = ( state ) => ({
    
    //data: state.ChatReducer.messages, 
    //status: state.ChatReducer.status, 

    data: state.ChatPenderReducer.messages, 
    status: state.ChatPenderReducer.status, 

    loading: state.pender.pending[CHAT_LOAD_MESSAGES], // here is the real action name 
    success: state.pender.success[CHAT_LOAD_MESSAGES],
    error: state.pender.failure[CHAT_LOAD_MESSAGES]

});

const mapDispatchToProps = ( dispatch ) => ({
    
    chatAddMessage : (data)=> dispatch(chatAddMessage(data)),
    chatDelMessage : (id)=> dispatch(chatDelMessage(id)),
    chatListMessages : (id)=> dispatch(chatListMessages(id)),

});

export default connect ( mapStateToProps, mapDispatchToProps )(ChatComponent); 
