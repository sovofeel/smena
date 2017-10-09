import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Auth from './components/Auth'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
// import registerServiceWorker from './registerServiceWorker'
import getStore from './store'

const store = getStore({})

ReactDOM.render(
  <Provider store={store}>
    {/* <Auth> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Auth> */}
  </Provider>,
  document.getElementById('root')
)
