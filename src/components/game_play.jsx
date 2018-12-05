import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { addQuestions, addResponse, updateGameState } from '../js/actions/index';
import QuestionDisplay from './question_display';
import { RESULTS } from '../js/constants/game-states';



const mapDispatchToProps = dispatch => ({
  addQuestions: questions => dispatch(addQuestions(questions)),
  addResponse: response => dispatch(addResponse(response)),
  updateGameState: gameState => dispatch(updateGameState(gameState)),
});

const mapStateToProps = state => ({ questions: state.questions });

class GamePlay extends Component {
  constructor() {
    super();

    this.addResponseWithPossibleChangeToResults = this.addResponseWithPossibleChangeToResults.bind(this);
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(json => this.props.addQuestions(json.data.results));
  }

  loadingIndicator() {
    return (
      <div>
        Loading
      </div>);
  }

  displayNextQuestion() {
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
    this.props.addResponse(response);
    if (this.questionNumber() === this.lastQuestionNumber()) {
      this.props.updateGameState(RESULTS);
    }
  }

  lastQuestionNumber() {
    return this.props.questions.length
  }

  questionsLoaded() {
    return this.props.questions.length > 0;
  }

  nextQuestion() {
    return this.questionsToBeAnswered()[0];
  }

  questionNumber() {
    return ((this.lastQuestionNumber() + 1) - this.questionsToBeAnswered().length);
  }

  questionsToBeAnswered() {
    return this.props.questions
      .filter(question => question.response === undefined);
  }

  moreQuestions() {
    return this.questionsToBeAnswered().length > 0;
  }

  render() {
    if (this.questionsLoaded()) {
      return this.displayNextQuestion();
    }
    return this.loadingIndicator();
  }
}

GamePlay.propTypes = {
  addQuestions: PropTypes.func.isRequired,
  updateGameState: PropTypes.func.isRequired,
  addResponse: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);
