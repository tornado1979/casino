import { describe, it } from 'mocha'
import { expect } from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import * as action from './index'

import {
  RECEIVE_GAMES,
  REQUEST_GAMES,
  RECEIVE_GAMES_FAIL,
} from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('* gameLobby actionCreators:', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('should dispatch `REQUEST_GAMES` and `RECEIVE_GAMES` on fetchGames', () => {
    const payload = {
      casinoGames: [
        {
          description: 'Lorem ipsum dolor..',
          favorite: 5,
          gameId: 1,
          gameName: 'Finn and the Swirly Spin',
          image: 'url',
        },
      ],
    }
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: payload,
        status: 200,
      })
    })

    const expectedActions = [REQUEST_GAMES, RECEIVE_GAMES]

    const store = mockStore()

    // call the fetchGames() async action creator
    return store.dispatch(action.fetchGames()).then(() => {
      const dispatchedActions = store.getActions()

      const actionTypes = dispatchedActions.map(act => act.type)

      expect(actionTypes).eql(expectedActions)
      expect(dispatchedActions).eql(
        [
          {
            payload: { isFetching: true }, type: REQUEST_GAMES,
          },
          {
            payload: {
              casinoGames: [
                {
                  description: 'Lorem ipsum dolor..',
                  favorite: 5,
                  gameId: 1,
                  gameName: 'Finn and the Swirly Spin',
                  image: 'url',
                },
              ],
              isFetching: false,
            },
            type: RECEIVE_GAMES,
          },
        ],
      )
    },
    )
  })


  it('should create an action to request games ', () => {
    const expectedAction = {
      payload: { isFetching: true },
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
        type: RECEIVE_GAMES,
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
