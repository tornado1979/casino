import React from 'react'
import { Link } from 'react-router-dom';

export default () => (
  <nav className="nav justify-content-end flex-column flex-sm-row">
    <Link to="/games" className="flex-sm-fill text-sm-center nav-link active" >Games</Link>
    <Link to="/" className="flex-sm-fill text-sm-center nav-link" >Username</Link>
    <Link to="/settings" className="flex-sm-fill text-sm-center nav-link" >Settings</Link>
    <Link to="/" className="flex-sm-fill text-sm-center nav-link" >Logout</Link>
  </nav>
)
