import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  <div id="home-container">
    <div id="home-text">
      <h2>Will Bill and Claire's baby be a <Link to='/GuessBoy' id='boy-text'>BOY</Link> or
      a <Link to='/GuessGirl' id='girl-text'>GIRL</Link>?</h2>
    </div>
  </div>
)

export default Home
