import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameIntro from './game_intro';
import GamePlay from './game_play';
import Results from './results';
import { INTRO, GAME_PLAY, RESULTS } from '../js/constants/game-states';
import '../scss/trivia_game.scss';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({ gameState: state.gameState });

const TriviaGame = () => (
  <div className="trivia-game__screen-wrapper">
      <Switch>
        <Route exact path='/play' component={GamePlay}></Route>
        <Route exact path='/intro' component={GameIntro}></Route>
        <Route exact path='/results' component={Results}></Route>
        <Route component={GameIntro}></Route>
      </Switch>
    </div>
    );

export default withRouter(connect(mapStateToProps)(TriviaGame));

