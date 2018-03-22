import { combineReducers } from 'redux'

import { 
  asyncGames as games,
 } from '../gameLobby/reducers'

const rootReducers = combineReducers({
  games,
})

export default rootReducers
