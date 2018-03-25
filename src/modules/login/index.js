import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import { login } from '../login/actionCreators'
import Form from '../../components/form'
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
            <Form
                username={username}
                password={password}
                hasPassword={true}
                submitted={submitted}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  login: propTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps,
)(Login)