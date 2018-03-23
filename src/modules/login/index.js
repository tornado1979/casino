import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { getUser } from '../user/selectors'
import { login } from '../login/actionCreators'

import '../../css/index.scss'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const { name, value } = event.target
    event.preventDefault();
    this.setState({
      [name]:value
    })
  }

  handleSubmit(event){

    event.preventDefault();
    this.setState({submitted: true})
    const { username, password } = this.state

    if(username && password){
      this.props.login(username,password)
    }
  }

  render() {
    const { username, password, submitted } = this.state;
    return(
      <div className="my-container">
        <div className="my-row justify-content-center">
          <div className="col-sm-6">
            <form name="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="inputUsername">Username</label>
                <input type="text" className="form-control" id="inputUsername"
                  placeholder="Enter username"
                  name="username" value={username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  name="password" value={password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary" value={submitted}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
  login: propTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const isLoggedIn = !!getUser(state)
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)