import {changeEmail, changeFirstName, changeLastName} from 'actions/profileActions'
import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

const email = handleActions(
  {
    [changeEmail]: (state, action) => action.payload
  },
  ''
)

const firstName = handleActions(
  {
    [changeFirstName]: (state, action) => action.payload
  },
  ''
)

const lastName = handleActions(
  {
    [changeLastName]: (state, action) => action.payload
  },
  ''
)

export default combineReducers({
  email,
  firstName,
  lastName
})

export const getEmail = state => state.profile.email
export const getFirstName = state => state.profile.firstName
export const getLastName = state => state.profile.lastName
