import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { getUser } from '../../modules/user/selectors'

const Header = () => (
  <nav className="nav justify-content-end flex-column flex-sm-row">
    <Link to="/games" className="flex-sm-fill text-sm-center nav-link active" >Games</Link>
    <Link to="/" className="flex-sm-fill text-sm-center nav-link" >Username</Link>
    <Link to="/settings" className="flex-sm-fill text-sm-center nav-link" >Settings</Link>
    <Link to="/login" className="flex-sm-fill text-sm-center nav-link" >Login</Link>
  </nav>
)

export default Header