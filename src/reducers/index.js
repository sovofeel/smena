import {combineReducers} from 'redux'
import sider from './sider'
import profile from './profile'
import candles from './candles'
import auth from './auth'

export default combineReducers({
  auth,
  candles,
  profile,
  sider
})
