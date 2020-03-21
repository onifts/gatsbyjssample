
import actions from '../actions';

const { CHAT_ADD_MESSAGE, CHAT_DEL_MESSAGE, CHAT_LIST_MESSAGES } = actions.ChatAction;

// init data 
const initialState = {
    maxNo: 0,
    messages: [

        // {chatgroupid:0,chatid:0,username:'',regdatetime:'',message:'',ismine:'1',isnotcheck:'0',issystem:'0',photo:''}

    ],

};

// reducer 
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

        default:
            
            return state;
        
    } // end switch

} // end ChatReducer

export default ChatReducer;
