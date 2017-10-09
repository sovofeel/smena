import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getIsAuthorized, getIsAuthorizing} from 'reducers/auth'
import {Layout, Input} from 'antd'

class Login extends PureComponent {
    handleLoginClick() {
        console.log(this.emailComponent.refs.input.value)
        console.log(this.passwordComponent.refs.input.value)
    }

    render() {
        const {getIsAuthorized} = this.props

        if(getIsAuthorized) {
            return <Redirect to="/" />
        }
        return (
            <Layout>
                <Input ref={c => (this.emailComponent = c)} placeholder='email'/>
                <Input ref={c => (this.passwordComponent = c)} placeholder='password' />
                <button onClick={this.handleLoginClick.bind(this)}>Login</button>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    getIsAuthorized: getIsAuthorized(state)
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)