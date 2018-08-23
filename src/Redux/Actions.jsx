import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE, GET_MESSAGE_ID, GET_LOGOUT, GET_USER } from './Types'
const messagesAPI = "https://kwitter-api.herokuapp.com/messages"

// export const addTodo = (title, keyNumber) => { return { type: ADD_TODO, title, keyNumber } }

export const getMessages = () => (dispatch) => {


    fetch("https://kwitter-api.herokuapp.com/messages")
        .then(response => response.json())
        .then(messagesResponse => {
            console.log(messagesResponse);
            dispatch({
                type: GET_MESSAGE_ID, messages: messagesResponse.messages
            })
        })
}

export const getLogout = () => (dispatch) => {


    fetch("https://kwitter-api.herokuapp.com/auth/logout")
        .then(response => response.json())
        .then(messagesResponse => {
            console.log(messagesResponse)
            dispatch({
                type: GET_LOGOUT, message: messagesResponse.message, success: messagesResponse.success
            })
        })
}


export const getMessageID = () => (dispatch) => {

    //this will need to use a parameternumber pass down to get a specific message
    const singleMessage = "https://kwitter-api.herokuapp.com/messages/336"

    fetch("https://kwitter-api.herokuapp.com/messages/336")
        .then(response => response.json())
        .then(messageID => {
            console.log(messageID);
            dispatch({
                type: GET_MESSAGE_ID, message: messageID
            })
        })
}



export const getUser = (number) => (dispatch) => {



    fetch('https://kwitter-api.herokuapp.com/users')
        .then(response => response.json())
        .then(users => {
            console.log(users);
            dispatch({
                type: GET_USER, user: users.user
            })
        })
}



export const login = (username, password) => {
    return { type: LOGIN, username, password }
}

export const register = (username, password, displayName) => { return { type: REGISTER, username, password, displayName } }

export const newPost = (text, createdAt, userId) => { return { type: NEW_POST, text, createdAt, userId } }

export const like = () => { return { type: LIKE, } }

export const deleteMessage = () => { return { type: DELETE_MESSAGE } }