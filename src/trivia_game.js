import React from 'react';
import GameIntro from './game_intro'
import GamePlay from './game_play'
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { gameState: state.gameState};
};

const TriviaGame = ({ gameState }) => {
  if (gameState === "intro") {
    return <GameIntro/>;
  }
  return <GamePlay/>;
}


export default connect(mapStateToProps)(TriviaGame)
