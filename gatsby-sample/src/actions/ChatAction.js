
// Action Type 
const CHAT_ADD_MESSAGE = '@oni/CHAT_ADD_MESSAGE' ;
const CHAT_DEL_MESSAGE = '@oni/CHAT_DEL_MESSAGE' ;
const CHAT_LIST_MESSAGES = '@oni/CHAT_LIST_MESSAGES' ;

const CHAT_DEL_GROUP = '@oni/CHAT_DEL_GROUP' ;
const CHAT_LOAD_MESSAGES = '@oni/CHAT_LOAD_MESSAGES' ;
const CHAT_PULL_MESSAGES = '@oni/CHAT_PULL_MESSAGES' ;

// Action Creator  
export const chatAddMessage = (data) => ({ type: CHAT_ADD_MESSAGE, message: data }) ;

export const chatDelMessage = (id) => ({ type: CHAT_DEL_MESSAGE, no : id }) ;

export const chatListMessages = (id) => ({ type: CHAT_LIST_MESSAGES, chatgroupid: id }) ;

// ... 
export {
	CHAT_ADD_MESSAGE,
	CHAT_DEL_MESSAGE,
	CHAT_LIST_MESSAGES,

	CHAT_DEL_GROUP,
	CHAT_LOAD_MESSAGES,
	CHAT_PULL_MESSAGES,
}
