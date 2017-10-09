import {fork} from 'redux-saga/effects'
import {userInfoWatch} from './userInfoSaga'

export default function* () {
  yield fork(userInfoWatch);
}
