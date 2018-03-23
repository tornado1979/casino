import { LOG_OUT_SUCCESS } from '../actions'

export const logout = () => (dispatch) => {

  // remove user from local storage to log user out
  localStorage.removeItem('user');
  console.log('logout')
  dispatch({
    payload: {},
    type: LOG_OUT_SUCCESS,
  })
}