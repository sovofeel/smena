import {createAction} from 'redux-actions'
import {getCandles} from 'api'

export const getCandlesSuccess = createAction(
  'GET_CANDLES_SUCCESS',
  (pair, data) =>
    data
      .map(([date, open, close, high, low, volume]) => ({
        date,
        open,
        close,
        high,
        low,
        volume
      }))
      .reverse(),
  pair => pair
)
export const getCandlesFailure = createAction(
  'GET_CANDLES_FAILURE',
  (pair, error) => error,
  pair => pair
)

export const getCandlesRequest = createAction(
  'GET_CANDLES_REQUEST',
  payload => payload,
  payload => ({
    async: true,
    apiCall: () => getCandles(payload),
    successCreator: data => getCandlesSuccess(payload, data),
    failureCreator: error => getCandlesFailure(payload, error)
  })
)
