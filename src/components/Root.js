import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// import App from '../App'
import TriviaGame from './trivia_game';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <TriviaGame/>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root

