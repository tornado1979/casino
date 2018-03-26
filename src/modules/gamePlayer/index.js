import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import _ from 'lodash'

import * as message from '../../constants'

import {
  fetchGame,
} from './actionCreators'

import {
  getGame,
} from './selectors'

import { isUserLoggedIn } from '../user/selectors'
import Button from '../../components/button'
import '../../css/index.scss'
import { history } from '../../helpers/history'


class GamePlayer extends Component {
  constructor(props){
    super(props)
    this.goto = this.goto.bind(this)

    this.state = {gameExists:false}
  }

goto(path){
  history.push(path)
}

componentDidMount(){
  const {
    gameId,
  } = this.props.match.params

  this.props.fetchGame(gameId)
}

render() {
  const { isLoggedIn, game } = this.props
  const nogame = _.isEmpty(game)

  const gamebg = !nogame ? {'backgroundImage': `url(${game.image})`}
    : {'backgroundImage': `url(${message.LOADER_URL})`}

  return(
    <div className="my-container">
    <div className="my-row justify-content-center">
      <div className="game-player col-sm-6" style={gamebg}>
       <span className="closeButton" onClick={() => this.goto('/')}>x</span>       
          {!isLoggedIn 
          && <div className="mx-auto w-100 p-3 bg-dark small-container">
          {/*if user is not logged in*/}
            <Button
              message={message.LOGIN_TO_PLAY}
              action={this.goto}
              goto="/login"/>
          </div>}

          {/*if the user is loggd in and if the game does not exist: e.g. game/13762 */}
          {isLoggedIn 
          && nogame 
          && <div className="mx-auto w-100 p-3 bg-dark small-container">
            <Button
              message={message.GAME_NOT_EXIST}
              action={this.goto}
              goto="/"/>
          </div>}
      </div>
    </div>
    <div className="my-row justify-content-center">
      <div className="col-sm-12">
        {!nogame && `${game.gameName}.  ${game.description}`}
      </div>
    </div>
  </div>
    )
  } 
}

GamePlayer.propTypes = {

}

GamePlayer.propTypes = {
  game: propTypes.object.isRequired,
  fetchGame: propTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const isLoggedIn = isUserLoggedIn(state)
  return {
    game: getGame(state),
    isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchGame,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamePlayer)
