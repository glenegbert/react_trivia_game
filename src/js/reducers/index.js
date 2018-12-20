import * as constants  from '../constants/action-types';
import { combineReducers } from 'redux'


const questions = (state = [], action) => {
  const { type, payload } = action
  if (type === constants.LOAD_QUESTIONS) {
    return payload
  } else if (type === constants.CLEAR_QUESTIONS) {
    return []
  } else if (type === constants.ADD_RESPONSE) {
    return addResponse(state, payload)
  }
  return state
};

const errorMessage = (state = null, action) => {
  const {type, payload } = action

  if (type === constants.CLEAR_ERROR_MESSAGE) {
    return null
  }
  if (type === constants.RENDER_ERROR_MESSAGE) {
    return payload
  }
  return state
}

const addResponse = (questions, response) => {

  const newQuestions = questions.filter(
    question => question !== response.question,
  );

  newQuestions
    .push(Object.assign({ response: response.response },
      response.question));
  return newQuestions;
};

const rootReducer = combineReducers({
  questions,
  errorMessage
})


export default rootReducer;
