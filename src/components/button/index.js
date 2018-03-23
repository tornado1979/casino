import React from 'react'
import propTypes from 'prop-types'

const Button = (props) => (
  <button type="button" className="btn btn-primary btn-lg btn-block message"
  onClick={() => { props.action(props.goto) }} >
    <span>{props.message}</span>
  </button>
)

Button.propTypes = {
  message: propTypes.string.isRequired,
  action: propTypes.func.isRequired,
  goto: propTypes.string,
}

export default Button