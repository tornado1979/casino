import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { 
  LOGIN_TO_PLAY,
  GAME_NOT_EXIST,
  } from '../../constants'

import { getUser } from '../user/selectors'
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
  //Here i would normally dispatch an action that asks the server if the game exists
  //if yes, the gameplayer loads, if no an error message displayd e.g. Game does not Exist!
  //no i just assume that we have 5 games only and i dont make any request to server
  const {
    gameId,
  } = this.props.match.params

  if(isNaN(Number(gameId))){
    this.setState({gameExists: false})
  }else{
    //the 5 dumy gameIds
    const gameExists = [1, 2, 3, 4, 5].includes(Number(gameId))
    this.setState({gameExists})
  }
}

render() {
  const { isLoggedIn } = this.props

  return(
    <div className="my-container">
    <div className="my-row justify-content-center">
      <div className="game-player col-sm-6">
       <span className="closeButton" onClick={() => this.goto('/games')}>x</span>
       
          {!isLoggedIn 
          && <div className="mx-auto w-100 p-3 bg-dark small-container">
          {/*if user is not logged in*/}
            <Button
              message={LOGIN_TO_PLAY}
              action={this.goto}
              goto="/login"/>
          </div>}

          {/*if the user is loggd in and if the game does not exist: e.g. game/13762 */}
          {isLoggedIn 
          && !this.state.gameExists 
          && <div className="mx-auto w-100 p-3 bg-dark small-container">
            <Button
              message={GAME_NOT_EXIST}
              action={this.goto}
              goto="/games"/>
          </div>}
      </div>
    </div>
  </div>
    )
  } 
}

GamePlayer.propTypes = {

}

const mapStateToProps = (state) => {
  const isLoggedIn = !!getUser(state)
  return {
    isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  null,
)(GamePlayer)