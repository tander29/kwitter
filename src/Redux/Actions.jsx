import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE } from './Types'

// export const addTodo = (title, keyNumber) => { return { type: ADD_TODO, title, keyNumber } }

export const login = (username, password) => { return { type: LOGIN, username, password } }

export const register = (username, password, displayName) => { return { type: REGISTER, username, password, displayName } }

export const newPost = (text, createdAt, userId) => { return { type: NEW_POST, text, createdAt, userId } }

export const like = () => { return { type: LIKE, } }

export const deleteMessage = () => { return { type: DELETE_MESSAGE } }