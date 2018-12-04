import { ADD_QUESTIONS, UPDATE_GAMESTATE, ADD_RESPONSE } from "../constants/action-types";
const initialState = {
  gameState: "intro",
  questions: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: action.payload };
    case UPDATE_GAMESTATE:
      return { ...state, gameState: action.payload };
    case ADD_RESPONSE:
      return { ...state, questions: addResponse(state.questions, action.payload) };
    default:
      return state;
  }
};

const addResponse = (questions, response) => {
  let newQuestions= questions.filter(
    (question) => question !== response.question)
  newQuestions
    .push(Object.assign({response: response.response},
                         response.question))
  return newQuestions;

};

export default rootReducer;
