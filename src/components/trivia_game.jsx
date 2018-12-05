import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameIntro from './game_intro';
import GamePlay from './game_play';
import Results from './results';
import { INTRO, GAME_PLAY, RESULTS } from '../js/constants/game-states';
import '../scss/trivia_game.scss';

const mapStateToProps = state => ({ gameState: state.gameState });

const gameScreen = (gameState) => {
  switch (gameState) {
    case INTRO:
      return <GameIntro />;
    case GAME_PLAY:
      return <GamePlay />;
    case RESULTS:
      return <Results />;
    default:
      return <GameIntro />;
  }
};

const TriviaGame = ({ gameState }) => (
  <div className="trivia-game__screen-wrapper">
    {gameScreen(gameState)}
  </div>
);

TriviaGame.propTypes = {
  gameState: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(TriviaGame);
