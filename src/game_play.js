import React, { Component } from 'react';
import axios from 'axios'
import { addQuestions, addResponse } from './js/actions/index';
import { connect } from 'react-redux';
import QuestionDisplay from './question_display';


const mapDispatchToProps = dispatch => {
  return {
    addQuestions: questions => dispatch(addQuestions(questions)),
    addResponse: response => dispatch(addResponse(response)),

  };
};

const mapStateToProps = state => {
  return { questions: state.questions};
};

class GamePlay extends Component {
  render () {
    if (this.questionsLoaded()) {
      if (this.moreQuestions()) {
        return this.displayNextQuestion()
      }
      return this.showResults()
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
           addResponse={this.props.addResponse}/>
      </div>
    )
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

  showResults () {
    return (<div>
      Results
    </div>)
  }


};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);

