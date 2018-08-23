import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE, FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR, MESSAGES} from './Types'

export const login = (username, password) => { return { type: LOGIN, username, password } }

export const register = (username, password, displayName) => { return { type: REGISTER, username, password, displayName } }

export const newPost = (text, createdAt, userId) => { return { type: NEW_POST, text, createdAt, userId } }

export const like = () => { return { type: LIKE, } }

export const deleteMessage = () => { return { type: DELETE_MESSAGE } }

export const fetchRequest = () => { return { type: FETCH_REQUEST} }

export const fetchSuccess = () => { return { type: FETCH_SUCCESS } }

export const fetchError = () => { return { type: FETCH_ERROR} }



export const fetchMessages = () => (dispatch) => {
        
            
            const API = `https://kwitter-api.herokuapp.com/messages=1`

            fetch(API)
                .then(response => response.json())
                .then(data => { 
                    dispatch({
                        type: MESSAGES,
                        payload: data
                    
               })
        })
}
