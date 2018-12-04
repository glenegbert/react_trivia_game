import React from 'react';
import PropTypes from 'prop-types';

const QuestionDisplay = ({ question, number, addResponse }) => (
  <div>
    <div>
      {' '}
      {question.category}
      {' '}
    </div>
    <div>
      {' '}
      {question.question.replace(/&quot;/g, '"').replace(/&#039;/g,"'")}
      {' '}
    </div>
    <div>
      {' '}
      {number}
      {' '}
/ 10
      {' '}
    </div>
    <button type="button" onClick={() => addResponse({ response: true, question })}> True </button>
    <button type="button" onClick={() => addResponse({ response: false, question })}> False </button>

  </div>
);

QuestionDisplay.propTypes = {
  question: PropTypes.shape({ category: PropTypes.string, question: PropTypes.string }).isRequired,
  number: PropTypes.number.isRequired,
  addResponse: PropTypes.func.isRequired,
};

export default QuestionDisplay;
