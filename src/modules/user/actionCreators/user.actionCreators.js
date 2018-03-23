import {
  GET_USER,
  UPDATE_USERNAME_SUCCESS,
} from '../actions'

export const getUser = () => (dispatch) => {
  //get user from localstorage
  let user = JSON.parse(localStorage.getItem('user'));
  return dispatch({
    payload: { user },
    type: GET_USER
  })
}

export const updateUsername = (username) => (dispatch) => {
  //save the user on localStorage
  localStorage.setItem('user', JSON.stringify({username}));
  
  dispatch({
    payload: username,
    type: UPDATE_USERNAME_SUCCESS,
  })
}
