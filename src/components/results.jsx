import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateGameState, clearQuestions } from '../js/actions/index';
import { INTRO } from '../js/constants/game-states';
import '../scss/results.scss';
import ReactUtils from '../helpers/react_utils';
import ResultsHelpers from '../helpers/results_helpers';
import QuestionHelpers from '../helpers/questions_helpers';

const bem = ReactUtils.makeBem('results');

const mapDispatchToProps = dispatch => ({
  updateGameState: gameState => dispatch(updateGameState(gameState)),
  clearQuestions: () => dispatch(clearQuestions()),
});

const mapStateToProps = state => ({ questions: state.questions });

const Results = ({ questions, updateGameState, clearQuestions }) => (
  <div>
    <div className={bem('header')}>
      <h2> You Scored </h2>
      <h2>
        {ResultsHelpers.numberCorrect(questions)}/
        {questions.length}
      </h2>
    </div>
    <div>
      <ul className={bem('question-list')}>
        {questions.map(question => <ResultDisplay question={question} />)}
      </ul>
    </div>
    <button className={bem('play-again-button')} type="button" onClick={() => { updateGameState(INTRO); clearQuestions(); }}>Play Again</button>
  </div>
);

Results.propTypes = {
  updateGameState: PropTypes.func.isRequired,
  clearQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const ResultDisplay = ({ question }) => (
  <li className={bem('question')}>
    {<PlusMinusIndicator question={question} />}
    <span>
      {QuestionHelpers.cleanQuestion(question.question)}
    </span>
    <div className={bem('question__correct-answer')}>
      CorrectAnswer  = {question.correct_answer}
    </div>
  </li>);

ResultDisplay.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
  }).isRequired,
};

const PlusMinusIndicator = ({ question }) => {
  if (ResultsHelpers.questionCorrect(question)) {
    return <span> + </span>;
  }
  return <span> - </span>;
};

PlusMinusIndicator.propTypes = {
  question: PropTypes.shape({
    response: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
