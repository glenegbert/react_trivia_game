import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { connect } from 'react-redux';
import {
   addResponse, clearQuestions
} from '../js/actions/index';
import QuestionDisplay from './question_display';
import QuestionsService from '../services/questions_service';


const mapDispatchToProps = dispatch => ({
  addResponse: response => dispatch(addResponse(response)),
  clearQuestions: () => dispatch(clearQuestions()),
  fetchAndAddQuestions: () => QuestionsService.fetchQuestions(dispatch)
});

const mapStateToProps = state => ({ questions: state.questions });

class GamePlay extends Component {
  constructor() {
    super();

    this.addResponseWithPossibleChangeToResults =
      this.addResponseWithPossibleChangeToResults.bind(this);
  }

  componentWillMount() {
    const { clearQuestions } = this.props;
    clearQuestions();
  }

  componentDidMount() {
    const { fetchAndAddQuestions } = this.props;
    fetchAndAddQuestions()
  }

  loadingIndicator() {
    return (
      <div>
        Loading
      </div>);
  }

  displayNextQuestionOrGoToResults() {
    return (
      <div>
        <QuestionDisplay
          totalQuestions={this.lastQuestionNumber()}
          question={this.nextQuestion()}
          number={this.questionNumber()}
          addResponse={this.addResponseWithPossibleChangeToResults}
        />
      </div>
    );
  }

  addResponseWithPossibleChangeToResults(response) {
    const { addResponse, history } = this.props;
    addResponse(response);
    if (this.questionNumber() === this.lastQuestionNumber()) {
      history.push('/results');
    }
  }

  lastQuestionNumber() {
    return this.questions().length;
  }

  questionsLoaded() {
    return this.questions().length > 0;
  }

  nextQuestion() {
    return this.questionsToBeAnswered()[0];
  }

  questionNumber() {
    return ((this.lastQuestionNumber() + 1)
       - this.questionsToBeAnswered().length);
  }

  questionsToBeAnswered() {
    return this.questions()
      .filter(question => question.response === undefined);
  }

  moreQuestions() {
    return this.questionsToBeAnswered().length > 0;
  }

  questions() {
    return this.props.questions;
  }

  render() {
    if (this.questionsLoaded() && this.nextQuestion()) {
      return this.displayNextQuestionOrGoToResults();
    }
    return this.loadingIndicator();
  }
}

GamePlay.propTypes = {
  addResponse: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);
