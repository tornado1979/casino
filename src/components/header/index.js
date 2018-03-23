import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { getUser, getUsername } from '../../modules/user/selectors'

const Header = (props) => (
  <nav className="nav justify-content-end flex-column flex-sm-row">
    <Link to="/games" className="flex-sm-fill text-sm-center nav-link active" >Games</Link>
    {props.isLoggedIn && <div className="username-nav flex-sm-fill text-sm-center nav-link">{props.username}</div>}
    {props.isLoggedIn && <Link to="/settings" className="flex-sm-fill text-sm-center nav-link" >Settings</Link>}
    {props.isLoggedIn && <Link to="/logout" className="flex-sm-fill text-sm-center nav-link" >Logout</Link>}
    {!props.isLoggedIn && <Link to="/login" className="flex-sm-fill text-sm-center nav-link" >Login</Link>}
  </nav>
)

function mapStateToProps(state) {
  const isLoggedIn = !!getUser(state)
  const username = getUsername(state)
  return {
    isLoggedIn,
    username
  }
}
export default connect(mapStateToProps)(Header)