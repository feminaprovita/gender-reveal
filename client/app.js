import React from 'react'
import {Router} from 'react-router-dom'
import history from './history'
import Routes from './routes'

const App = () => {
  return (
    <div id='whole-page'>
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  )
}

export default App
