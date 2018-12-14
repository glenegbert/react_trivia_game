import React from 'react';
import PropTypes from 'prop-types';
import PlusMinusIndicator from './plus_minus_indicator';
import ReactUtils from '../helpers/react_utils';
import ResultsHelpers from '../helpers/results_helpers';
import QuestionHelpers from '../helpers/questions_helpers';

const bem = ReactUtils.makeBem('results');

const ResultDisplay = ({ question }) => (
  <li className={bem('question')}>
    {<PlusMinusIndicator correct={ResultsHelpers.questionCorrect(question)} />}
    <span>
      {QuestionHelpers.parsedQuestion(question.question)}
    </span>
    <div className={bem('question__correct-answer')}>
      CorrectAnswer  =
      {' '}
      {question.correct_answer}
    </div>
  </li>);

ResultDisplay.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultDisplay;
