import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import '../../css/index.scss'

import {
  fetchGames,
} from './actionCreators'

import {
  getGames,
} from './selectors'

class GameLobby extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchGames()
  }

  render() {

    const {
      games,
    } = this.props
        
    let casinoGames

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
}

const mapStateToProps = (state) => ({
  games: getGames(state),
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchGames,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameLobby)