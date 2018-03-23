import { combineReducers } from 'redux'

import { 
  asyncGames as games,
 } from '../gameLobby/reducers'
 import {
   user,
 } from '../user/reducers'

const rootReducers = combineReducers({
  games,
  user,
})

export default rootReducers
