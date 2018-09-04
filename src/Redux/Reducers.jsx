import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE, GET_MESSAGE_ID, GET_MESSAGES, GET_LOGOUT, GET_USER } from './Types'


const initialState = { messages: [], profile: { username: null, token: null, id: null, success: null }, user: {}, logout: {success: false, message: ''} }

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
            return state;

        case NEW_POST:
            return state;

        case LIKE:
            break;

        case DELETE_MESSAGE:
            break;


        case GET_MESSAGE_ID:
            return state;

        case GET_LOGOUT:
            return {
                ...state,
                logout: {
                    success: action.success,
                    message: action.message
                }
            }
        case GET_USER:
            return state

        default:
            return state;
    }
}