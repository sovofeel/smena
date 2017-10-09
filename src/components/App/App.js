import React, {Component} from 'react'
import {Layout} from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import USD_BTC from 'pages/USD_BTC'
import USD_ETH from 'pages/USD_ETH'
import Profile from 'pages/Profile'
import SideNav from 'components/SideNav'
import {connect} from 'react-redux'
import {changeCollapse} from 'actions/siderActions'
import PrivateRoute from 'components/PrivateRoute'
import {getUserInfoRequest} from 'actions/authActions'

const {Content, Footer, Sider} = Layout
const StyledLayout = styled(Layout)`height: 100%;`
const StyledFooter = styled(Footer)`textAlign: center;`

class App extends Component {
  componentWillMount() {
    this.props.getUserInfoRequest()
  }
  render() {
    const {collapsed, changeCollapse, location: {pathname}} = this.props

    return (
      <StyledLayout>
        <Sider collapsible collapsed={collapsed} onCollapse={changeCollapse}>
          <SideNav pathname={pathname} />
        </Sider>

        <Layout>
          <Content style={{margin: '0 16px'}}>
            <Switch>
              <PrivateRoute path="/btc" component={USD_BTC} />
              <PrivateRoute path="/eth" component={USD_ETH} />
              <PrivateRoute path="/profile" component={Profile} />
              <Redirect from="/" to="/btc" exact />
            </Switch>
          </Content>
          <StyledFooter>Smena school © 2017</StyledFooter>
        </Layout>
      </StyledLayout>
    )
  }
}

const mapStateToProps = state => ({
  collapsed: state.sider.collapsed
})

const mapDispatchToProps = {
  changeCollapse,
  getUserInfoRequest
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
