import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE, GET_MESSAGES } from './Types'

// export const addTodo = (title, keyNumber) => { return { type: ADD_TODO, title, keyNumber } }

export const getMessages = () => (dispatch) => {


    fetch("https://kwitter-api.herokuapp.com/messages")
        .then(response => response.json())
        .then(messagesResponse => {
            console.log(messagesResponse);
            dispatch({
                type: GET_MESSAGES, messages: messagesResponse.messages
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