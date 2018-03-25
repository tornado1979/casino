import axios from "axios"
import { GAMES_URL } from '../../../constants'

//action costants
import { 
  RECEIVE_GAMES,
  REQUEST_GAMES,
  RECEIVE_GAMES_FAIL,
 } from '../actions'

const requestGames = () => {
  return {
    payload: {isFetching: true},
    type: REQUEST_GAMES,
  }
}

const receiveGames = (data) => {
  return {
    payload: {
      ...data,
      isFetching: false,
    },
    type: RECEIVE_GAMES,
  }
}

const error = (err) => {
  return {
    payload: err,
    type: RECEIVE_GAMES_FAIL,
  }
}

export const fetchGames = () => (dispatch) => {

  dispatch(requestGames())

  return axios(GAMES_URL)
    .then((response)=> {
        return response.data
    })
    .then((Games) => {
      return dispatch(receiveGames(Games))
    })
    .catch((err) => {
      return dispatch(error(err))
    })
}
