import React from 'react';
import PropTypes from 'prop-types';
import '../scss/question_display.scss';
import ReactUtils from '../helpers/react_utils';

var bem = ReactUtils.makeBem('question-display');

const QuestionDisplay = ({ question, number, addResponse }) => (
  <div>

    <div className={bem('header')}>
      <h2><strong>{question.category}</strong></h2>
    </div>

    <div className={bem('question')}>
      {question.question.replace(/&quot;/g, '"').replace(/&#039;/g,"'")}
    </div>

    <div className={bem('question-number')}>
      {number} / 10
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
};

export default QuestionDisplay;
