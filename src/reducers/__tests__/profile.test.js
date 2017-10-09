import profileReducer from '../profile'
import {changeEmail, changeFirstName, changeLastName} from 'actions/profileActions'

describe('Profile reducer', () => {
  test('#reducer init value', () => {
    expect(profileReducer(undefined, {})).toEqual({firstName: '', lastName: '', email: ''})
  })
  ;[
    ['email', changeEmail],
    ['lastName', changeLastName],
    ['firstName', changeFirstName]
  ].forEach(([name, actionCreator]) => {
    test(`${name}`, () => {
      const initState = profileReducer(undefined, {})
      expect(profileReducer(initState, actionCreator('test@test'))[name]).toEqual('test@test')
    })
  })
})
