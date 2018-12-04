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
    if (this.props.questions.length > 0) {
      return (
        <div>
          <QuestionDisplay
             question={this.nextQuestion()}
             number={this.questionNumber()}
             addResponse={this.props.addResponse}/>
        </div>
      )
    } else {
      return (
        <div>
          Loading
        </div>)
    }
  };

  componentDidMount () {
    axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((json) => this.props.addQuestions(json.data.results))
  }

  nextQuestion() {
    return this.props.questions
      .find((question)=> question.response === undefined)
  }

  questionNumber() {
    return 11 - this.props.questions
      .filter((question) => question.response === undefined).length
  }



};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);

