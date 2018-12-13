import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import TriviaGame from './trivia_game';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <TriviaGame />
    </Router>
  </Provider>
);

export default Root;
