import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'
import {getUserInfoFailure, getUserInfoSuccess} from 'actions/authActions'

const email = handleActions(
  {
    [getUserInfoSuccess]: (state, action) => action.payload.email
  },
  ''
)
const id = handleActions(
  {
    [getUserInfoSuccess]: (state, action) => action.payload.id
  },
  null
)
const isAuthorized = handleActions(
  {
    [getUserInfoSuccess]: () => true
  },
  false
)

const isAuthorizing = handleActions(
  {
    [getUserInfoFailure]: () => false,
    [getUserInfoSuccess]: () => false
  },
  true
)

export default combineReducers({
  email,
  id,
  isAuthorized,
  isAuthorizing
})

export const getEmail = state => state.auth.email
export const getId = state => state.auth.id
export const getIsAuthorized = state => state.auth.isAuthorized
export const getIsAuthorizing = state => state.auth.isAuthorizing
