import axios from 'axios';

// Action Type 
const CHAT_ADD_MESSAGE = '@oni/CHAT_ADD_MESSAGE' ;
const CHAT_DEL_MESSAGE = '@oni/CHAT_DEL_MESSAGE' ;
const CHAT_LIST_MESSAGES = '@oni/CHAT_LIST_MESSAGES' ;

//const CHAT_DEL_GROUP = '@oni/CHAT_DEL_GROUP' ;
//const CHAT_LOAD_MESSAGES = '@oni/CHAT_LOAD_MESSAGES' ;
//const CHAT_PULL_MESSAGES = '@oni/CHAT_PULL_MESSAGES' ;

// Action Creator  
export const chatAddMessage = (data) => ({ type: CHAT_ADD_MESSAGE, message: data }) ;
export const chatDelMessage = (id) => ({ type: CHAT_DEL_MESSAGE, no : id }) ;

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

const apiGetChatListMessages = ( userid, chatgroupid, chatid ) => {

	const url = `http://15.165.204.186:3000/oni/chat/list/${userid}/${chatgroupid}/${chatid}`;

	//console.log(url)

	return axios.get(url);
	
} // end apiGetChatListMessages

//export const chatListMessages = (id) => ({ type: CHAT_LIST_MESSAGES, chatgroupid: id }) ;
export const chatListMessages = ( {userid, chatgroupid, chatid} ) => dispatch => {
	
	//console.log(userid, chatgroupid, chatid)

	dispatch({type: GET_POST_PENDING});

	return apiGetChatListMessages( userid, chatgroupid, chatid )
	.then(
        (response) => {
            dispatch({
                type: GET_POST_SUCCESS,
                data: response.data
            })
        }
	)
	.catch(error => {
        dispatch({
            type: GET_POST_FAILURE,
            data: error
		});
		
    }); // end apiGetChatListMessages
	
} // end chatListMessages

// ... 
export {
	CHAT_ADD_MESSAGE,
	CHAT_DEL_MESSAGE,
	CHAT_LIST_MESSAGES,

	//CHAT_DEL_GROUP,
	//CHAT_LOAD_MESSAGES,
	//CHAT_PULL_MESSAGES,

	GET_POST_PENDING,
	GET_POST_SUCCESS,
	GET_POST_FAILURE
}
