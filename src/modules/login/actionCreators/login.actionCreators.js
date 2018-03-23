import axios from "axios"
import { USERS_URL } from '../../../constants'
import { history } from '../../../helpers/history'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions'

const requestLogin = (username) => {
  return {
    payload: username,
    type: LOGIN_REQUEST,
  }
}

const loginSuccess = (user) => {
  return {
    payload: user,
    type: LOGIN_SUCCESS,
  }
}

const loginFailure = (err) => {
  return {
    payload: {},
    type: LOGIN_FAIL,
  }
}

export const login = (username,password) => (dispatch) => {
  dispatch(requestLogin(username))
  const URL = `${USERS_URL}?username=${username}&password=${password}`
  return axios(URL)
  .then((response)=> {
    return response.data
  })
  .then((user) => {
    dispatch(loginSuccess(user))
    //save the user on localStorage
    localStorage.setItem('user', JSON.stringify(user));
    //direct the logedin user to the games page
    history.push('/games')
  })
  .catch((err) => {
    return dispatch(loginFailure(err))
    //pending: dispatch error message on the client as a notification..
  })
}