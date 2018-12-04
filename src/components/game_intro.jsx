import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGameState } from '../js/actions/index';
import { GAME_PLAY } from '../js/constants/game-states';

const mapStateToProps = state => ({ gameState: state.gameState });

const mapDispatchToProps = dispatch => ({
  updateGameState: gameState => dispatch(updateGameState(gameState)),
});

const GameIntro = ({ updateGameState }) => (
  <div>
    <div>
        Intro Text
    </div>
    <div>
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
