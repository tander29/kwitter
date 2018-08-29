import {
  LOGIN,
  REGISTER,
  NEW_POST,
  LIKE,
  DELETE_MESSAGE,
  GET_MESSAGE_ID,
  GET_LOGOUT,
  GET_USER,
} from "./Types";
import {push} from 'connected-react-router'


// export const addTodo = (title, keyNumber) => { return { type: ADD_TODO, title, keyNumber } }

export const getMessages = () => dispatch => {
  fetch("https://kwitter-api.herokuapp.com/messages")
    .then(response => response.json())
    .then(messagesResponse => {
      console.log(messagesResponse);
      dispatch({
        type: GET_MESSAGE_ID,
        messages: messagesResponse.messages
      });
    });
};

export const getLogout = () => dispatch => {
  //this is a comment to bypass a merge issue
  fetch("https://kwitter-api.herokuapp.com/auth/logout")
    .then(response => response.json())
    .then(messagesResponse => {
      console.log(messagesResponse);
      dispatch({
        type: GET_LOGOUT,
        message: messagesResponse.message,
        success: messagesResponse.success
      });
      if(messagesResponse.success === true){
      dispatch(push('/Home'))
      alert(messagesResponse.message)
      }
    });
};

export const getMessageID = () => dispatch => {
  //this will need to use a parameternumber pass down to get a specific message
  const singleMessage = "https://kwitter-api.herokuapp.com/messages/336";

  fetch("https://kwitter-api.herokuapp.com/messages/336")
    .then(response => response.json())
    .then(messageID => {
      console.log(messageID);
      dispatch({
        type: GET_MESSAGE_ID,
        message: messageID
      });
    });
};

export const getUser = number => dispatch => {
  fetch("https://kwitter-api.herokuapp.com/users")
    .then(response => response.json())
    .then(users => {
      console.log(users);
      dispatch({
        type: GET_USER,
        user: users.user
      });
    });
};

export const newPost = () => dispatch => {
  let authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTM2LCJpYXQiOjE1MzUwMzY3NjZ9.z0QM0IEmHRmdu93aOQ5qGwE-GUknK_OJevK5yz-zhfY";
  const postRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ text: "this is test stuff1" })
  };

  fetch("https://kwitter-api.herokuapp.com/messages", postRequestOptions)
    .then(response => response.json())
    .then(confirmation => {
      console.log(confirmation);
      dispatch({ type: NEW_POST, test: confirmation });
    });
  // return { type: NEW_POST, text, createdAt, userId }
};

export const login = (username, password) => dispatch => {
  let authKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTM2LCJpYXQiOjE1MzUwMzY3NjZ9.z0QM0IEmHRmdu93aOQ5qGwE-GUknK_OJevK5yz-zhfY";

  const postRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password })
  };

  fetch("https://kwitter-api.herokuapp.com/auth/login", postRequestOptions)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch({
        type: LOGIN,
        data: data
      });
      if(data.success === true) {
        dispatch(push('/Main'))
      } else {
        alert("Wrong Username or Password")
      }
    });
};

export const register = (displayName, username, password) => dispatch => {
  const postRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ displayName: displayName, username: username, password: password })
  }
  
  fetch("https://kwitter-api.herokuapp.com/auth/register", postRequestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: REGISTER,
        displayName,
        username,
        password
      })
      dispatch(push('/Main'))
    });
    
};

export const like = () => {
  return { type: LIKE };
};

export const deleteMessage = () => {
  return { type: DELETE_MESSAGE };
};

