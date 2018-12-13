import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  addQuestions, addResponse, updateGameState, clearQuestions,
} from '../js/actions/index';
import QuestionDisplay from './question_display';


const mapDispatchToProps = dispatch => ({
  addQuestions: questions => dispatch(addQuestions(questions)),
  addResponse: response => dispatch(addResponse(response)),
  updateGameState: gameState => dispatch(updateGameState(gameState)),
  clearQuestions: () => dispatch(clearQuestions()),
});

const mapStateToProps = state => ({ questions: state.questions });

class GamePlay extends Component {
  constructor() {
    super();

    this.addResponseWithPossibleChangeToResults =
      this.addResponseWithPossibleChangeToResults.bind(this);
  }

  componentWillMount() {
    const { clearQuestions, history } = this.props;
    if (this.questionsLoaded() && !this.nextQuestion()) {
      clearQuestions();
      history.push('/intro');
    }
  }

  componentDidMount() {
    const { addQuestions } = this.props;
    axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(json => addQuestions(json.data.results));
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
  addQuestions: PropTypes.func.isRequired,
  addResponse: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);
