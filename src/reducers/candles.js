import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'
import {getCandlesRequest, getCandlesSuccess, getCandlesFailure} from 'actions/apiActions'

const isLoading = handleActions(
  {
    [getCandlesRequest]: () => true,
    [getCandlesSuccess]: () => false,
    [getCandlesFailure]: () => false
  },
  false
)

const isLoaded = handleActions(
  {
    [getCandlesRequest]: () => false,
    [getCandlesSuccess]: () => true,
    [getCandlesFailure]: () => true
  },
  false
)

const error = handleActions(
  {
    [getCandlesFailure]: (state, action) => ({pair: action.meta, error: action.payload})
  },
  {pair: null, error: ''}
)

const enitites = handleActions(
  {
    [getCandlesSuccess]: (state, action) => ({
      ...state,
      [action.meta]: [...state[action.meta], ...action.payload]
    })
  },
  {usdbtc: [], usdeth: []}
)

export default combineReducers({
  isLoading,
  isLoaded,
  enitites,
  error
})
