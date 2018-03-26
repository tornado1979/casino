import React from 'react'
import propTypes from 'prop-types'

import Notification from '../notification'
import * as message from '../../constants'

const Form = ({ handleChange, handleSubmit, hasPassword, submitted, password, username}={}) => (
  <form name="form" onSubmit={(event) => { handleSubmit(event)} }>
      <div className="form-group">
      <label htmlFor="inputUsername">Username</label>
      <input type="text" className="form-control" id="inputUsername"
        placeholder="Enter username"
        name="username" value={username}
        onChange={(event) => {handleChange(event)}}
      />
      {submitted && !username &&
        <Notification
        type='danger'
        message={message.USERNAME_REQUIRED}/>
      }
    </div>
    {hasPassword
    && <div className="form-group">
      <label htmlFor="inputPassword">Password</label>
      <input type="password" className="form-control"
        id="inputPassword"
        placeholder="Password"
        name="password" value={password}
        onChange={(event) => handleChange(event)}
      />
      {submitted && !password &&
        <Notification
        type='danger'
        message={message.PASSWORD_REQUIRED}/>
      }
    </div>}
    <button type="submit" className="btn btn-primary" value={submitted}>Submit</button>
  </form>
)
Form.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  hasPassword: propTypes.bool.isRequired,
  submitted: propTypes.bool.isRequired,
  password: propTypes.string,
  username: propTypes.string.isRequired,
}

export default Form