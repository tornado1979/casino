import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import Notification from '../../components/notification'
import {
  PLAY_FOR_FUN,
  PLAY_FOR_REAL,
} from '.././../constants'

import '../../css/index.scss'

import {
  fetchGames,
} from './actionCreators'

import {
  getGames,
} from './selectors'

import { isUserLoggedIn } from '../user/selectors'

class GameLobby extends Component {

  componentDidMount(){
    this.props.fetchGames()
  }

  render() {

    const {
      games,
      isLoggedIn,
    } = this.props
        
    let casinoGames

    const notificationType = isLoggedIn ? 'success' : 'danger'
    const notificationMessage = isLoggedIn ? PLAY_FOR_REAL : PLAY_FOR_FUN

    if(games && games.length > 0){

      casinoGames = games.map( (game,idx) => {
  
      //loop through the games array and build the elements
      let className = `my-content-1`
      
      return (
        <div className={className} key={idx} >
          <div className="card">
          <img className="card-img-top" src={game.image} alt={game.gameName} />
            <div className="card-body">
              <p className="card-title">{idx+1}. {game.gameName}</p>
              <p className="card-text">{game.description}</p>
              <Notification
              to={`game/${game.gameId}`}
              type={notificationType}
              message={notificationMessage}/>
            </div>
          </div>
        </div>)
      })
    }
        

    return(
      <div className="my-container">
        <div className="my-row">
          {casinoGames}
        </div>
      </div>
    )
  }
}

GameLobby.propTypes = {
  games: propTypes.array.isRequired,
  fetchGames: propTypes.func.isRequired,
  isLoggedIn: propTypes.bool.isRequired,
}


const mapStateToProps = (state) => {
  const isLoggedIn = isUserLoggedIn(state)
  return {
    games: getGames(state),
    isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchGames,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameLobby)