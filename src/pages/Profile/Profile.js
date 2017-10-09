import React from 'react'
import {Layout, Input} from 'antd'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {changeEmail, changeFirstName, changeLastName} from 'actions/profileActions'
import {getEmail, getLastName, getFirstName} from 'reducers/profile'

const StyledLayout = styled(Layout)`margin: 32px;`

export const Profile = ({email, firstName, lastName, changeEmail, changeFirstName, changeLastName}) => (
  <StyledLayout>
    <Input placeholder="last name" value={lastName} onChange={event => changeLastName(event.target.value)} />
    <Input placeholder="email" value={email} onChange={event => changeEmail(event.target.value)} />
    <Input
      placeholder="first name"
      value={firstName}
      onChange={event => changeFirstName(event.target.value)}
    />
  </StyledLayout>
)

const mapStateToProps = state => ({
  email: getEmail(state),
  firstName: getFirstName(state),
  lastName: getLastName(state)
})

const mapDispatchToState = {
  changeEmail,
  changeFirstName,
  changeLastName
}

export default connect(mapStateToProps, mapDispatchToState)(Profile)
