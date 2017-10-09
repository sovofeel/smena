import {createAction} from 'redux-actions'

export const getUserInfoRequest = createAction('GET_USER_INFO_REQUEST')
export const getUserInfoSuccess = createAction('GET_USER_INFO_SUCCESS')
export const getUserInfoFailure = createAction('GET_USER_INFO_FAILURE')
