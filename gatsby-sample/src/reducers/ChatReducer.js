
import actions from '../actions';

const { 
    
    CHAT_ADD_MESSAGE,
	CHAT_DEL_MESSAGE,
	CHAT_LIST_MESSAGES,

	//CHAT_DEL_GROUP,
	//CHAT_LOAD_MESSAGES,
	//CHAT_PULL_MESSAGES,

	GET_POST_PENDING,
	GET_POST_SUCCESS,
    GET_POST_FAILURE
    
 } = actions.ChatAction;

// init data 
const initialState = {
    maxNo: 0,
    messages: [

        // {chatgroupid:0,chatid:0,username:'',regdatetime:'',message:'',ismine:'1',isnotcheck:'0',issystem:'0',photo:''}

    ],
    status:0
};

// reduce 
const ChatReducer = ( state = initialState, action ) => {
    
    let messages = state.messages;

    switch( action.type ) {
        
        case CHAT_ADD_MESSAGE:
            
            const maxNo = state.maxNo + 1;
            const data = action.message; // { chatgroupid:0, username:'', photo:'', message:'' }

            return { ...state, maxNo : maxNo, messages : messages.concat( { ...data, no : maxNo, chatid : 0, ismine : '1', isnotcheck : '0', issystem :'0', regdatetime : new Date() } ) };
        
        case CHAT_DEL_MESSAGE:
            
            const no = action.no;

            return { ...state, messages: messages.filter( row => row.no !== no ) };

        case CHAT_LIST_MESSAGES:
        
            const chatgroupid = action.chatgroupid;

            return { ...state, messages: messages.filter( row => row.chatgroupid !== chatgroupid ) };

        case GET_POST_PENDING:
            
            return { ...state, status : 1 };
        
        case GET_POST_SUCCESS:
            
            return { ...state, status : 0, messages : action.data };
        
        case GET_POST_FAILURE:
            
            return { ...state, status : -1 };
        
        default:
            
            return state;
        
    } // end switch

} // end ChatReducer

export default ChatReducer;
