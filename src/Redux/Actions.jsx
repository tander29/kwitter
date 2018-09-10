import {
  LOGIN,
  REGISTER,
  NEW_POST,
  LIKE,
  GET_MESSAGE_ID,
  GET_LOGOUT,
  GET_USER,
  GET_MESSAGES,
  UNLIKE,
  DELETE_MESSAGE,
  DELETE_USER,
  PATCH_PASSWORD,
  PATCH_ABOUT
} from "./Types";
import { push } from 'connected-react-router'
const heroku = "https://whispering-shelf-14206.herokuapp.com"
// const herokuOriginal = "https://kwitter-api.herokuapp.com"

export const getMessages = () => (dispatch, getState) => {

  fetch(heroku + "/messages?limit=1000")

    .then(response => response.json())
    .then(messagesResponse => {
      const userId = getState().profile.id
      const allLikes = messagesResponse.messages.map(message => message.likes)
      const likes = [].concat(...allLikes)
      const userLikes = likes.filter(like => like.userId === userId)
      const userLikeMessageId = userLikes.map(userLike => userLike.messageId)
      dispatch({
        type: GET_MESSAGES,
        messages: messagesResponse.messages,
        userLikeMessageId: userLikeMessageId
      });

    });

};

export const getLogout = () => dispatch => {
  //this is a comment to bypass a merge issue
  fetch(heroku + "/auth/logout")
    .then(response => response.json())
    .then(data => {

      dispatch({
        type: GET_LOGOUT,
        message: data.message,
        success: data.success
      });
      dispatch(push('/'))
    });
};

export const getMessageID = (id) => (dispatch, getState) => {
  fetch(heroku + "/messages/" + id)
    .then(response => response.json())
    .then(messageID => {

      dispatch({
        type: GET_MESSAGE_ID,
        message: messageID.message.id,
      });
    });
};

export const getLikeId = (messageId, userId, messages) => {

  const message = messages.find(message => message.id === messageId)
  const like = message.likes.find(like => like.userId === userId)

  if (like === undefined) {
    return undefined
  } else {
    return like.id
  }
}

export const getUser = () => dispatch => {
  fetch(heroku + "/users")
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: GET_USER,
        users: data.users
      });
    });
};

export const newPost = (text, token) => dispatch => {
  let authKey = `Bearer ${token}`
  const postRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ text: text })
  };

  fetch(heroku + "/messages", postRequestOptions)
    .then(response => response.json())
    .then(data => {

      dispatch({ type: NEW_POST, messages: data });
      dispatch(getMessages())
    });
};

export const login = (username, password) => dispatch => {

  const postRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password })
  };


  fetch(heroku + "/auth/login", postRequestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: LOGIN,
        data: { token: data.token, id: data.id, success: data.success },
        username: username,
        password: password

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
    Authorization: { ...errors },
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password, displayName: displayName })
  }

  fetch(heroku + "/auth/register", postRequestOptions)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: REGISTER,
        Authorization: data.errors,
        displayName: displayName,
        username: username,
        password: password,
      })
      dispatch(login(username, password))
    });

};

export const like = (messageId) => (dispatch, getState) => {
  const loggedIn = getState().profile.success
  if (!loggedIn) { return }
  const token = getState().profile.token
  let authKey = `Bearer ${token}`

  const postLike = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ messageId: messageId })
  }

  fetch(heroku + "/likes", postLike)
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
  const loggedIn = getState().profile.success
  if (!loggedIn) { return }
  const userId = getState().profile.id
  const messages = getState().messages
  const likeId = getLikeId(messageId, userId, messages)

  const token = getState().profile.token
  let authKey = `Bearer ${token}`

  const deleteLike = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: authKey },
  }

  fetch(heroku + "/likes/" + likeId, deleteLike)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: UNLIKE,
        messageId: messageId
      })
      dispatch(getMessages())
    })
}

export const deleteMessage = (messageId) => (dispatch, getState) => {

  const token = getState().profile.token
  let authKey = `Bearer ${token}`
  const deleteMessage = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: authKey },
  }
  fetch(heroku + "/messages/" + messageId, deleteMessage)
    .then(res => res.json())
    .then(data => {

      dispatch({
        type: DELETE_MESSAGE,
        payload: data
      })
      dispatch(getMessages())
    })
}

export const deleteUser = () => (dispatch, getState) => {

  const token = getState().profile.token
  let authKey = `Bearer ${token}`


  const deleteUser = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: authKey },
  }
  fetch(heroku + "/users/", deleteUser)
    .then(res => res.json())
    .then(data => {

      dispatch({
        type: DELETE_USER,
        payload: data
      })
      dispatch(getLogout())
    })

}

export const patchPassword = (password) => (dispatch, getState) => {

  const token = getState().profile.token
  let authKey = `Bearer ${token}`
  const patchUser = {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ password: password })
  }
  fetch(heroku + "/users/", patchUser)
    .then(res => res.json())
    .then(data => {

      dispatch({
        type: PATCH_PASSWORD,
        payload: data
      })

    })

}

export const patchAbout = (about) => (dispatch, getState) => {

  const token = getState().profile.token
  let authKey = `Bearer ${token}`
  const patchUser = {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: authKey },
    body: JSON.stringify({ about: about })
  }
  fetch(heroku + "/users/", patchUser)
    .then(res => res.json())
    .then(data => {

      dispatch({
        type: PATCH_ABOUT,
        payload: data
      })
      dispatch(getUser())
    })

}

