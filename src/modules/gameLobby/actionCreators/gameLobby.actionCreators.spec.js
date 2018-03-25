import { describe, it } from 'mocha'
import { expect } from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import deepFreeze from 'deep-freeze'

import * as action from './index'

import { 
  RECEIVE_GAMES,
  REQUEST_GAMES,
  RECEIVE_GAMES_FAIL,
 } from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('* gameLobby actionCreators:', () => {
/*  it('dispatches action to get games', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)

    fetchMock
      .getOnce('/games', { games: {casinoGames:[]} })
 

    const store = mockStore({ games: { casinoGames:[]} })
   console.log('store',store)
    const expectedActions = [ { payload: { isFetching: true }, type: 'REQUEST_GAMES' },
    {
      payload: {casinoGames:[]},
      type: 'RECEIVE_GAMES'
    }]
    /*{ payload: { casinoGames: 
      [{"gameId":1,"gameName":"Finn and the Swirly Spin","image":"http:\/\/www.deutz-hellas.gr\/dummy-database\/images\/finn.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.","favorite":5},{"gameId":2,"gameName":"Piggy Riches","image":"http:\/\/www.deutz-hellas.gr\/dummy-database\/images\/piggy.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.","favorite":162},{"gameId":3,"gameName":"Gold King","image":"http:\/\/www.deutz-hellas.gr\/dummy-database\/images\/king.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.","favorite":48},{"gameId":4,"gameName":"Immortal Romance","image":"http:\/\/www.deutz-hellas.gr\/dummy-database\/images\/immortal.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.","favorite":0},{"gameId":5,"gameName":"Playboy Gold","image":"http:\/\/www.deutz-hellas.gr\/dummy-database\/images\/playboy.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl metus, condimentum in arcu eget, auctor posuere augue. Donec quis nisl eget dui placerat ultricies. Nam at arcu at lectus volutpat scelerisque. Sed commodo accumsan nulla, eu hendrerit nibh luctus eget. Aliquam erat volutpat. Cras eget aliquet ex, condimentum placerat mi. Duis gravida porta vestibulum.","favorite":7}]
    , isFetching: false },
      type: 'RECEIVE_GAMES' } ]*/
/*  
    return store.dispatch(fetchGames()).then(() => {
      // return of async actions
      console.log('*********************')
      console.log(store.getActions())
      console.log('*********************')
      expect(store.getActions()).eql(expectedActions)
    })
  })
*/
  it('should create an action to request games ', () => {
    const expectedAction = {
      payload: {isFetching: true},
      type: REQUEST_GAMES,
    }

    expect(action.requestGames()).eql(expectedAction)
  })

  it('should create an action to receiveGames games ', () => {
    const games = {
      casinoGames: [],
    }
    const expectedAction =
      { 
        payload: {
          casinoGames: [],
          isFetching: false,
        },        
      type: 'RECEIVE_GAMES'
    }

    expect(action.receiveGames(games)).eql(expectedAction)
  })

  it('should create an action for receive games fail ', () => {
    const errorMsg = 'error'

    const expectedAction =
    {
      payload: errorMsg,
      type: RECEIVE_GAMES_FAIL,
    }

    expect(action.error(errorMsg)).eql(expectedAction)
  })

})
