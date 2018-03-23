import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { history } from '../../helpers/history'
import { logout } from '../logout/actionCreators'

class LogoutPage extends Component {

  componentWillMount() {
    //dispatch action to crear user from state
    this.props.logout()
    history.push('./')
  }

  render() {
    return null
  }
}
LogoutPage.propTypes = {
 
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout,
}, dispatch)

export default connect(null, mapDispatchToProps)(LogoutPage)