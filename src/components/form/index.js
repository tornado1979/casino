import React from 'react'
import propTypes from 'prop-types'

const Form = ({ handleChange, handleSubmit, submitted, password, username}={}) => (
  <form name="form" onSubmit={(event) => { handleSubmit(event)} }>

      <div className="form-group">
      <label htmlFor="inputUsername">Username</label>
      <input type="text" className="form-control" id="inputUsername"
        placeholder="Enter username"
        name="username" value={username}
        onChange={(event) => {handleChange(event)}}
      />
    </div>
    {password
    && <div className="form-group">
      <label htmlFor="inputPassword">Password</label>
      <input type="password" className="form-control"
        id="inputPassword"
        placeholder="Password"
        name="password" value={password}
        onChange={(event) => handleChange(event)}
      />
    </div>}
    <button type="submit" className="btn btn-primary" value={submitted}>Submit</button>
  </form>
)
Form.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  submitted: propTypes.bool.isRequired,
  password: propTypes.string,
  username: propTypes.string.isRequired,
}

export default Form