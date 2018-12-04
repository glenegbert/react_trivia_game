import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateGameState, clearQuestions } from '../js/actions/index';

const mapDispatchToProps = dispatch => ({
  updateGameState: gameState => dispatch(updateGameState(gameState)),
  clearQuestions: () => dispatch(clearQuestions()),
});


const mapStateToProps = state => ({ questions: state.questions });

const returnToIntro = (updateGameState, clearQuestions) => {
  clearQuestions();
  updateGameState('intro');
};

const Results = ({ questions, updateGameState, clearQuestions }) => (
  <div>
    <div> Question Results </div>
    <div>
      {' '}
      {questions[0].category}
      {' '}
    </div>
    <button type="button" onClick={() => returnToIntro(updateGameState, clearQuestions)}>Play Again</button>
  </div>
);

Results.propTypes = {
  updateGameState: PropTypes.func.isRequired,
  clearQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Results);
