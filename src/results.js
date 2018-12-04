import React from 'react';
import { connect } from 'react-redux';
import { updateGameState, clearQuestions } from "./js/actions/index";


const mapDispatchToProps = dispatch => {
  return {
    updateGameState: (gameState) => dispatch(updateGameState(gameState)),
    clearQuestions: () => dispatch(clearQuestions())
  };
};


const mapStateToProps = state => {
  return { questions: state.questions};
};

const Results = ({ questions, updateGameState, clearQuestions })=> {
    return (
      <div>
        <div> Question Results </div>
        <div> {questions[0].category} </div>
        <button onClick={() => returnToIntro(updateGameState, clearQuestions)}>Play Again</button>
      </div>
    )
}

const returnToIntro = (updateGameState, clearQuestions) => {
  clearQuestions()
  updateGameState("intro")
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
