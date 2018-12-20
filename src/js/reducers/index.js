import {
  ADD_QUESTIONS, ADD_RESPONSE, CLEAR_QUESTIONS, CLEAR_ERROR_MESSAGE
} from '../constants/action-types';
import { combineReducers } from 'redux'


const questions = (state = [], action) => {
  const { type, payload } = action
  if (type === ADD_QUESTIONS) {
    return payload
  } else if (type === CLEAR_QUESTIONS) {
    return []
  } else if (type === ADD_RESPONSE) {
    return addResponse(state, payload)
  }
  return state
};

const errorMessage = (state = "Oh noes", action) => {
  const {type } = action

  if (type === CLEAR_ERROR_MESSAGE) {
    return null
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
