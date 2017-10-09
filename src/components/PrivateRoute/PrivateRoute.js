import React, {PureComponent} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getIsAuthorized, getIsAuthorizing} from 'reducers/auth'

class PrivateRoute extends PureComponent {
  render() {
    const {
      isAuthorizing,
      isAuthorized,
      component: Component,
      ...rest
    } = this.props

    if (isAuthorizing) return <p>Loading...</p>
    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <Component {...props} /> : <Redirect to="/login" />}
      />
    )
  }
}

export default connect(state => ({
  isAuthorized: getIsAuthorized(state),
  isAuthorizing: getIsAuthorizing(state)
}))(PrivateRoute)
