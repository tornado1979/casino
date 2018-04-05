import { describe, it } from 'mocha'
import { expect } from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import * as action from './index'

import {
  RECEIVE_GAME,
  REQUEST_GAME,
  RECEIVE_GAME_FAIL,
} from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('* gamePlayer actionCreators:', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('should dispatch `REQUEST_GAME` and `RECEIVE_GAME` on fetchGame', () => {
    const payload = {
      game: {
        description: 'Lorem ipsum dolor..',
        favorite: 5,
        gameId: 1,
        gameName: 'Finn and the Swirly Spin',
        image: 'url',
      },
    }

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        response: payload,
        status: 200,
      })
    })

    const expectedActions = [REQUEST_GAME, RECEIVE_GAME]

    const store = mockStore()

    // call the fetchGame() async action creator
    return store.dispatch(action.fetchGame()).then(() => {
      const dispatchedActions = store.getActions()

      const actionTypes = dispatchedActions.map(act => act.type)

      expect(actionTypes).eql(expectedActions)
      expect(dispatchedActions).eql(
        [
          {
            payload: { game: {}, isFetching: true }, type: REQUEST_GAME,
          },
          {
            payload: {
              game: {
                game: {
                  description: 'Lorem ipsum dolor..',
                  favorite: 5,
                  gameId: 1,
                  gameName: 'Finn and the Swirly Spin',
                  image: 'url',
                },
              },
              isFetching: false,
            },
            type: RECEIVE_GAME,
          },
        ],
      )
    },
    )
  })

  it('should create an action to request game ', () => {
    const expectedAction = {
      payload: {
        game: {},
        isFetching: true,
      },
      type: REQUEST_GAME,
    }

    expect(action.requestGame()).eql(expectedAction)
  })

  it('should create an action to receiveGame game ', () => {
    const game = {}
    const expectedAction =
      {
        payload: {
          game: {},
          isFetching: false,
        },
        type: RECEIVE_GAME,
      }

    expect(action.receiveGame(game)).eql(expectedAction)
  })

  it('should create an action for receive game fail ', () => {
    const errorMsg = 'error'

    const expectedAction =
    {
      payload: errorMsg,
      type: RECEIVE_GAME_FAIL,
    }

    expect(action.error(errorMsg)).eql(expectedAction)
  })
})
