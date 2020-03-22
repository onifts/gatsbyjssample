import { handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

import actions from '../actions';

const { 
    
    CHAT_ADD_MESSAGE,
	CHAT_DEL_MESSAGE,
	CHAT_LIST_MESSAGES,

	CHAT_DEL_GROUP,
	CHAT_LOAD_MESSAGES,
	CHAT_PULL_MESSAGES,
    
 } = actions.ChatPenderAction;

// init data 
const initialState = {
    maxNo: 0,
    messages: [

        // {chatgroupid:0,chatid:0,username:'',regdatetime:'',message:'',ismine:'1',isnotcheck:'0',issystem:'0',photo:''}

    ],
    status:0
};

// reduce
export default handleActions({
    
        [CHAT_ADD_MESSAGE] : ( state, action ) => {
                
            const maxNo = state.maxNo + 1;
            const data = action.payload; // { chatgroupid:0, username:'', photo:'', message:'' }

            return { ...state, maxNo : maxNo, 
                messages : state.messages.concat( 
                    { ...data, no : maxNo, chatid : 0, ismine : '1', isnotcheck : '0', issystem :'0', regdatetime : new Date() } ) };
        },
        
        [CHAT_DEL_MESSAGE] : ( state, action ) => {
                
            const no = action.payload;

            return { ...state, messages: state.messages.filter( row => row.no !== no ) };

        },

        [CHAT_LIST_MESSAGES]: ( state, action ) => {
            
            const chatgroupid = action.payload;

            return { ...state, messages: state.messages.filter( row => row.chatgroupid !== chatgroupid ) };
        },

        ...pender({
            
            type: CHAT_LOAD_MESSAGES,
            
            onSuccess: (state, action) => { 
                
                return { ...state, status : 0, messages : action.payload.data };
            }
            // onPending: (state, action) => state // 요청이 시작하여 대기 중일 때 할 작업
            // onError: (state, action) => sate  // 오류 났을 때 할 작업

        }),
    
    },
    initialState

); // end handleActions