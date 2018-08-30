import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE, GET_MESSAGE_ID, GET_MESSAGES, GET_LOGOUT, GET_USER } from './Types'


const initialState = { messages: [],
                         profile: { username: null, token: null, id: null, success: null }, 
                         user: {}, 
                         displayName: null,
                         username: null,
                         password: null
                         
 }

export default function (state = initialState, action) {

    switch (action.type) {
        case LOGIN:

            return {
                ...state,
                profile: {
                    id: action.data.id,
                    success: action.data.success,
                    token: action.data.token,
                    username: action.username,
                }
            }

        case GET_MESSAGES:
            console.log("this reducer", action.messages)
            return {
                ...state,
                messages: action.messages
            }
        case REGISTER:
            return{
                ...state,
               
                displayName: action.displayName,
                username: action.username,
                password: action.password
                
            }

        case NEW_POST:
            return state;

        case LIKE:
            break;

        case DELETE_MESSAGE:
            break;


        case GET_MESSAGE_ID:
            return state;

        case GET_LOGOUT:
            return state

        case GET_USER:
            return state

        default:
            return state;
    }
}