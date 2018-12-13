import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearQuestions } from '../js/actions/index';
import '../scss/results.scss';
import ReactUtils from '../helpers/react_utils';
import ResultDisplay from './result_display';
import ResultsHelpers from '../helpers/results_helpers';

const bem = ReactUtils.makeBem('results');

const mapDispatchToProps = dispatch => ({
  clearQuestions: () => dispatch(clearQuestions()),
});

const mapStateToProps = state => ({ questions: state.questions });

const clearQuestionsAndReturnToIntro = (history, clearQuestions) => {
  history.push('/intro');
  clearQuestions();
};

const Results = ({
  questions, clearQuestions, history,
}) => (
  <div>
    <div className={bem('header')}>
      <h2> You Scored </h2>
      <h2>
        {ResultsHelpers.numberCorrect(questions)}
/
        {questions.length}
      </h2>
    </div>
    <div>
      <ul className={bem('question-list')}>
        {questions.map(question => <ResultDisplay question={question} key={question.question} />)}
      </ul>
    </div>
    <button
      className={bem('play-again-button')}
      type="button"
      onClick={() => clearQuestionsAndReturnToIntro(history, clearQuestions)}
    >
      Play Again
    </button>
  </div>
);


Results.propTypes = {
  clearQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Results);
