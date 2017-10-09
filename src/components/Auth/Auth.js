import React, {Component} from 'react'
import {getUserInfoRequest} from 'actions/authActions'
import {connect} from 'react-redux'
import {getIsAuthorized, getIsAuthorizing} from 'reducers/auth'
import {withRouter} from 'react-router-dom'

class Auth extends Component {
  componentWillMount() {
    const {getUserInfoRequest} = this.props
    getUserInfoRequest()
  }

  render() {
    const {isAuthorizing, isAuthorized} = this.props
    if (isAuthorizing) {
      return <div>Loading...</div>
    } else if (isAuthorized) {
      return this.props.children
    } else {
      return <div>Login page</div>
    }
  }
}

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state),
    isAuthorizing: getIsAuthorizing(state)
  }),
  {
    getUserInfoRequest
  }
)(Auth)
