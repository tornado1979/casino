import axios from "axios"
import { GAMES_URL } from '../../../constants'

//action costants
import { 
  RECEIVE_GAMES,
  REQUEST_GAMES,
  SERVER_CONNECTION_ERROR,
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
        type: SERVER_CONNECTION_ERROR,
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
