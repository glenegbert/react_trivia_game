import React from 'react';
import { connect } from 'react-redux';
import GameIntro from './game_intro';
import GamePlay from './game_play';
import Results from './results';
import { INTRO, GAME_PLAY, RESULTS } from '../js/constants/game-states';

const mapStateToProps = state => ({ gameState: state.gameState });

const TriviaGame = ({ gameState }) => {
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


export default connect(mapStateToProps)(TriviaGame);
