import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGameState } from '../js/actions/index';
import { GAME_PLAY } from '../js/constants/game-states';
import '../scss/game_intro.scss';
import ReactUtils from '../helpers/react_utils';

var bem = ReactUtils.makeBem('game-intro');

const mapStateToProps = state => ({ gameState: state.gameState });

const mapDispatchToProps = dispatch => ({
  updateGameState: gameState => dispatch(updateGameState(gameState)),
});

const GameIntro = ({ updateGameState }) => (
  <div>
    <div className={bem("header")}>
       <h2><strong>Welcome to the Trivia Challenge!</strong></h2>
    </div>
    <div className={bem("body")}>
       <h2>You will be presented with 10 True or False questions.</h2>
      <br></br>
      <br></br>
      <h2>Can you score 100%? </h2>
    </div>
    <div className={bem("begin-button")}>
      <button type="button" onClick={() => updateGameState(GAME_PLAY)}>
         BEGIN
      </button>
    </div>
  </div>);

GameIntro.propTypes = {
  updateGameState: PropTypes.func.isRequired,
};

const Intro = connect(mapStateToProps, mapDispatchToProps)(GameIntro);

export default Intro;
