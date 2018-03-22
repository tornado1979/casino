import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Games from '../../modules/gameLobby'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="wrapper">
        <Header/>
        <div className="main">
          <Route exact path="/games" component={Games} />
          <Route path="/games/:gameId" component={Games}/>
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