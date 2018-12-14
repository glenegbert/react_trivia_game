import React from 'react';
import PropTypes from 'prop-types';
import '../scss/question_display.scss';
import ReactUtils from '../helpers/react_utils';
import QuestionHelpers from '../helpers/questions_helpers';

const bem = ReactUtils.makeBem('question-display');

const QuestionDisplay = ({
  question, number, addResponse, totalQuestions,
}) => (
  <div>
    <div className={bem('header')}>
      <h2><strong>{question.category}</strong></h2>
    </div>
    <div className={bem('question')}>
      {QuestionHelpers.parsedQuestion(question.question)}
    </div>
    <div className={bem('question-number')}>
      {number}
/
      {totalQuestions}
    </div>
    <div className={bem('response-buttons')}>
      <button type="button" onClick={() => addResponse({ response: true, question })}> True </button>
      <button type="button" onClick={() => addResponse({ response: false, question })}> False </button>
    </div>
  </div>
);

QuestionDisplay.propTypes = {
  question: PropTypes.shape({ category: PropTypes.string, question: PropTypes.string }).isRequired,
  number: PropTypes.number.isRequired,
  addResponse: PropTypes.func.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default QuestionDisplay;
