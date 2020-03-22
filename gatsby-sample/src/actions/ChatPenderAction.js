import { createAction } from 'redux-actions';
import axios from 'axios';

// Action Type 
const CHAT_ADD_MESSAGE = '@oni/CHAT_ADD_MESSAGE/PENDER' ;
const CHAT_DEL_MESSAGE = '@oni/CHAT_DEL_MESSAGE/PENDER' ;
const CHAT_LIST_MESSAGES = '@oni/CHAT_LIST_MESSAGES/PENDER' ;

const CHAT_DEL_GROUP = '@oni/CHAT_DEL_GROUP/PENDER' ;
const CHAT_LOAD_MESSAGES = '@oni/CHAT_LOAD_MESSAGES/PENDER' ;
const CHAT_PULL_MESSAGES = '@oni/CHAT_PULL_MESSAGES/PENDER' ;

// Action Creator  
//export const chatAddMessage = (data) => ({ type: CHAT_ADD_MESSAGE, message: data }) ;
//export const chatDelMessage = (id) => ({ type: CHAT_DEL_MESSAGE, no : id }) ;
export const chatAddMessage = createAction( CHAT_ADD_MESSAGE );
export const chatDelMessage = createAction( CHAT_DEL_MESSAGE );

const apiGetChatListMessages = ( userid, chatgroupid, chatid ) => {

	const url = `http://15.165.204.186:3000/oni/chat/list/${userid}/${chatgroupid}/${chatid}`;

	//console.log(url)

	return axios.get(url);
	
} // end apiGetChatListMessages

//export const chatListMessages = (id) => ({ type: CHAT_LIST_MESSAGES, chatgroupid: id }) ;
export const chatListMessages = createAction( CHAT_LOAD_MESSAGES, ({userid, chatgroupid, chatid}) => apiGetChatListMessages(userid, chatgroupid, chatid) );

// ... 
export {
	CHAT_ADD_MESSAGE,
	CHAT_DEL_MESSAGE,
	CHAT_LIST_MESSAGES,

	CHAT_DEL_GROUP,
	CHAT_LOAD_MESSAGES,
	CHAT_PULL_MESSAGES,

}
