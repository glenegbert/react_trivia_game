import React, { Component } from 'react';
import axios from 'axios'
import { addQuestions, addResponse, updateGameState } from './js/actions/index';
import { connect } from 'react-redux';
import QuestionDisplay from './question_display';


const mapDispatchToProps = dispatch => {
  return {
    addQuestions: questions => dispatch(addQuestions(questions)),
    addResponse: response => dispatch(addResponse(response)),
    updateGameState: gameState => dispatch(updateGameState(gameState)),
  };
};

const mapStateToProps = state => {
  return { questions: state.questions};
};

class GamePlay extends Component {
  constructor() {
    super();

    this.addResponse = this.addResponse.bind(this);
  }
  render () {
    if (this.questionsLoaded()) {
      return this.displayNextQuestion()
    }
    return this.loadingIndicator()
  };

  componentDidMount () {
    axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((json) => this.props.addQuestions(json.data.results))
  }

  loadingIndicator () {
    return (
      <div>
        Loading
      </div>)
  }

  displayNextQuestion() {
    return (
      <div>
        <QuestionDisplay
           question={this.nextQuestion()}
           number={this.questionNumber()}
           addResponse={this.addResponse}/>
      </div>
    )
  }

  addResponse (response) {
    this.props.addResponse(response)
    if (this.questionNumber() === 10) {
      this.props.updateGameState("results");
    }
  }

  questionsLoaded () {
    return this.props.questions.length > 0
  }


  nextQuestion() {
    return this.questionsToBeAnswered()[0]
  }

  questionNumber() {
    return (11 - this.questionsToBeAnswered().length);
  }

  questionsToBeAnswered() {
    return this.props.questions
      .filter((question) =>
        question.response === undefined);

  }

  moreQuestions () {
    return this.questionsToBeAnswered().length > 0;
  }



};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);

