import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Games from '../../modules/gameLobby'
import Login from '../../modules/login'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { history } from '../../helpers/history'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div className="wrapper">
        <Header/>
        <div className="main">
          <Route exact path="/games" component={Games} />
          <Route path="/games/:gameId" component={Games}/>
          <Route path="/login" component={Login}/>
        </div>
        <Footer/>
      </div>
    </Router>
  </Provider>
)
 
Root.propTypes = {
  store: PropTypes.object.isRequired
}
 
export default Root