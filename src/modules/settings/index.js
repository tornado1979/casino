import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import Form from '../../components/form'
import { getUsername } from '../user/selectors'
import { updateUsername } from '../user/actionCreators'
import '../../css/index.scss'

class Settings extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: props.username,
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const { name, value } = event.target
    event.preventDefault();
    this.setState({
      [name]:value,
      submitted: false, //when user types on input box
    })
  }

  handleSubmit(event){
    event.preventDefault();
    //prevent submit, if user clicks 'submit' button many times continiously
    if(!this.state.submitted){
      this.setState({submitted: true})
      const { username } = this.state
      if(username){
        this.props.updateUsername(username)
      }
    }
  }

  render() {
    const {
      username,
      submitted,
     } = this.state;
    
    return(
      <div className="my-container">
        <div className="my-row justify-content-center">
          <div className="col-sm-6">
            <Form
              username={username}
              submitted={submitted}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              hasPassword={false}
            />
          </div>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  username: propTypes.string.isRequired,
  updateUsername: propTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const username = getUsername(state)
  return {
    username,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateUsername,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)