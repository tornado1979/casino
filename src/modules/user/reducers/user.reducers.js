import {
  GET_USER,
} from '../actions'

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../../login/actions'

export const user = (state={}, action) => {
  switch(action.type){
    case GET_USER:
      return {
        ...action.payload.user,
      }
    case LOGIN_REQUEST:
    case LOGIN_FAIL:
      return {}
    case LOGIN_SUCCESS:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
