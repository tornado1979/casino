import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import '../../css/index.scss'
import { history } from '../../helpers/history'


class GamePlayer extends Component {
  constructor(props){
    super(props)
  }

toGameLobby(){
  history.push('/games')
}

componentDidMount(){
  console.log('history',history)
  //Here i would normally dispatch an action that asks the server if the game exists
  //if yes, the gameplayer loads, if no an error message displayd e.g. Game does not Exist!
  //no i just assume that we have 5 games only and i dont make any request to server
  const {
    gameId,
  } = this.props.match.params

  const gameExists = [1, 2, 3, 4, 5].includes(gameId)
}

render() {
  return(
    <div className="my-container">
    <div className="my-row justify-content-center">
      <div className="game-player col-sm-6">
       <span className="closeButton" onClick={this.toGameLobby}>x</span>
      </div>
    </div>
  </div>
    )
  } 
}

GamePlayer.propTypes = {

}

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
 
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamePlayer)