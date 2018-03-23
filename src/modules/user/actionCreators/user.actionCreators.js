import {
  GET_USER,
} from '../actions'

export const getUser = () => (dispatch) => {
  //get user from localstorage
  let user = JSON.parse(localStorage.getItem('user'));
  return dispatch({
    payload: { user },
    type: GET_USER
  })
}