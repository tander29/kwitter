
import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE, GET_MESSAGE_ID, GET_MESSAGES, GET_LOGOUT, GET_USER, DELETE_USER, UNLIKE, PATCH_PASSWORD, PATCH_ABOUT } from './Types'



const initialState = {
    messages: [],
    profile: { username: null, password: null, token: null, id: null, success: null },
    users: [],
    logout: { success: false, message: '' },
    likes: []
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
                    password: action.password,
                }
            }

        case GET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
                likes: action.userLikeMessageId
            }

        case REGISTER:
            return {
                ...state,

                displayName: action.displayName,
                username: action.username,
                password: action.password

            }

        case NEW_POST:
            return {
                ...state,
                message: action
            }

        case LIKE:
            return {
                ...state,
                messageId: action.messageId,
                likes: [...state.likes, action.messageId]
            }

        case DELETE_MESSAGE:
            return { ...state }


        case GET_MESSAGE_ID:
            return {
                ...state,
                likes: {
                    liked: action.message
                }
            };

        case GET_LOGOUT:
            return {
                ...state,
                logout: {
                    success: action.success,
                    message: action.message
                },
                profile: {
                    username: null,
                    password: null,
                    token: null,
                    id: null,
                    success: null
                },
                likes: []
            }
        case GET_USER:
            return {
                ...state,
                users: action.users

            }

        case DELETE_USER:
            return {
                ...state,
            }

        case UNLIKE:
            return {
                ...state,
                likes: state.likes.filter(messageId => messageId !== action.messageId)
            }
        case PATCH_PASSWORD:

            return {
                ...state,

            }
        case PATCH_ABOUT:

            return {
                ...state,

            }

        default:
            return state;
    }
}