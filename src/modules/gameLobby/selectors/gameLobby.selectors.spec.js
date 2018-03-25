import { describe, it } from 'mocha'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { getGames } from './index'

process.env.NODE_ENV = 'test';

describe('* gameLobby/selectors:', function() {
  it('gets games list from state', () => {
    const state = 
    {games:{
      casinoGames: [
        {
          gameId:1,
          gameName: 'Finn',
          gameUrl: 'someurl',
          gameDscription: 'lorem ipsum',
        },
        {
          gameId:2,
          gameName: 'Immortal',
          gameUrl: 'someurl',
          gameDscription: 'lorem ipsum',
        }
      ]}
    }
    const result = getGames(state)
    deepFreeze(state)
    expect(result).to.eql(state.games.casinoGames)
  })
})
