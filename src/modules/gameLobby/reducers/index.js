import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
} from '../actions'

export const asyncGames = (state=[], action) => {
  switch (action.type){
    case REQUEST_GAMES:
      return {
        isFetching: true,
    }
    case RECEIVE_GAMES:
    return {
      ...action.payload,
      isFetching: action.payload.isFetching,
    }
    default:
      return state
  }
}
