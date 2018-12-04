import React from 'react';
import { connect } from "react-redux";
import { updateGameState } from "./js/actions/index";

const mapStateToProps = state => {
  return { gameState: state.gameState};
};

const mapDispatchToProps = dispatch => {
  return {
    updateGameState: (gameState) => dispatch(updateGameState(gameState))
  };
};

const GameIntro = ( { gameState, updateGameState }) => {
  return (
    <div>
     <div>
        Intro Text
     </div>
     <div>
       <button onClick={ ()=> updateGameState("gamePlay")}>
         BEGIN
       </button>
     </div>
    </div>)
};

const Intro = connect(mapStateToProps, mapDispatchToProps)(GameIntro);

export default Intro;
