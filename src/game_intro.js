import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleGameState } from "./js/actions/index";
const mapStateToProps = state => {
  return { gameState: state.gameState};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleGameState: () => dispatch(toggleGameState())
  };
};

const GameIntro = ( { gameState, toggleGameState }) => {
  return (
    <div>
     <div>
       State = { gameState }
     </div>
     <div>
       <button onClick={toggleGameState}>
         Toggle
       </button>
     </div>
    </div>)
};

const Intro = connect(mapStateToProps, mapDispatchToProps)(GameIntro);

export default Intro;
