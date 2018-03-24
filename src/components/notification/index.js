import React from 'react'
import { Link } from 'react-router-dom';

export default ({
  message,
  type,
  to
}={}) => {

    return (
    <div className={`alert alert-${type}`} role="alert">
      <Link to={to} className="alert-link">{message}</Link>
    </div>
)}