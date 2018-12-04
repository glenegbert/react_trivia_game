import GameIntro from './game_intro'
import GamePlay from './game_play'
import Results from './results';
import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { gameState: state.gameState};
};

const TriviaGame = ({ gameState }) => {
  switch (gameState) {
    case "gamePlay":
      return <GamePlay/>;
    case "results":
      return <Results/>;
    default:
      return <GameIntro/>;
  }
}


export default connect(mapStateToProps)(TriviaGame)
