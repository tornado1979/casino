import {
  REQUEST_GAME,
  RECEIVE_GAME,
} from '../actions'

export const gamePlayer = (state=[], action) => {
  switch (action.type){
    case REQUEST_GAME:
      return {
        ...action.payload,
    }
    case RECEIVE_GAME:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
