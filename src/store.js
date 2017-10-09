import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from 'reducers'

import createReduxSagas from 'redux-saga'
import rootSaga from 'sagas'

const reduxSaga = createReduxSagas()

export default (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(reduxSaga),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )

  reduxSaga.run(rootSaga)
  return store
}
