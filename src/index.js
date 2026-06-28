import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/styles/main.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './store/store'
import makeServer from './services/server'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
