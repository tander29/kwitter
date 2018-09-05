import {
  LOGIN,
  REGISTER,
  NEW_POST,
  LIKE,
  GET_MESSAGE_ID,
  GET_LOGOUT,
  GET_USER,
  GET_MESSAGES,
  UNLIKE
} from "./Types";
import { push } from 'connected-react-router'


export const getMessages = () => dispatch => {
  fetch("https://kwitter-api.herokuapp.com/messages?limit=1000")
    .then(response => response.json())
    .then(messagesResponse => {
      dispatch({
        type: GET_MESSAGES,
        messages: messagesResponse.messages
      });
    });

};

export const getLogout = () => dispatch => {
  //this is a comment to bypass a merge issue
  fetch("https://kwitter-api.herokuapp.com/auth/logout")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch({
        type: GET_LOGOUT,
        message: data.message,
        success: data.success
      });
      dispatch(push('/'))
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

export const getUser = () => dispatch => {
  fetch("https://kwitter-api.herokuapp.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch({
        type: GET_USER,
        users: data.users
      });
    });
};

export const newPost = (text, token) => dispatch => {
  console.log("action", text, token)
  // let authKeyTest =
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTM2LCJpYXQiOjE1MzUwMzY3NjZ9.z0QM0IEmHRmdu93aOQ5qGwE-GUknK_OJevK5yz-zhfY";
  //the one above works
  let authKey = `Bearer ${token}`
  const postRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ text: text })
  };

  fetch("https://kwitter-api.herokuapp.com/messages", postRequestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch({ type: NEW_POST, messages: data });
    });
};

export const login = (username, password) => dispatch => {

  const postRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password })
  };


  fetch("https://kwitter-api.herokuapp.com/auth/login", postRequestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: LOGIN,
        data: { token: data.token, id: data.id, success: data.success },
        username: username,
        password:password

      });
      if (data.success === true) {
        dispatch(push('/Main'))
      } else {
        alert("Wrong Username or Password")
      }
        dispatch(getUser())
    });
};

export const register = (displayName, username, password, errors) => dispatch => {
  const postRequestOptions = {
    method: "POST",
    Authorization: {...errors},
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username: username, password: password, displayName:displayName })
  }

  fetch("https://kwitter-api.herokuapp.com/auth/register", postRequestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: REGISTER,
        Authorization: data.errors,
        displayName: displayName,
        username: username,
        password: password,
      })
      dispatch(login(username,password))
    });

};

export const like = (messageId) => (dispatch, getState) => {
  const token = getState().profile.token
  let authKey = `Bearer ${token}`
  
  const postLike = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ messageId: messageId })
  }

  fetch("https://kwitter-api.herokuapp.com/likes", postLike)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: LIKE,
        messageId: data.like.messageId
      })
      dispatch(getMessages())
    })
};

export const unlike = (messageId) => (dispatch, getState) => {
  const token = getState().profile.token
  let authKey = `Bearer ${token}`
  
  const deleteLike = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ messageId: messageId })
  }

  fetch("https://kwitter-api.herokuapp.com/likes/")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: UNLIKE,
        messageId: data.like.messageId
      })
    })
}


