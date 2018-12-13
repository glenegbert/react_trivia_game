import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import GameIntro from './game_intro';
import GamePlay from './game_play';
import Results from './results';
import '../scss/trivia_game.scss';

const mapStateToProps = state => ({ gameState: state.gameState });

const TriviaGame = () => (
  <div className="trivia-game__screen-wrapper">
    <Switch>
      <Route exact path="/play" component={GamePlay} />
      <Route exact path="/intro" component={GameIntro} />
      <Route exact path="/results" component={Results} />
      <Route component={GameIntro} />
    </Switch>
  </div>
);

export default withRouter(connect(mapStateToProps)(TriviaGame));
