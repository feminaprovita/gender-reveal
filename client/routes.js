import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, GuessBoy, GuessGirl} from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/guessboy" component={GuessBoy} />
    <Route exact path="/guessgirl" component={GuessGirl} />
  </Switch>
)

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(Routes)
