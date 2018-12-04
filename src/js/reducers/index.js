import { ADD_QUESTIONS, TOGGLE_GAMESTATE, ADD_RESPONSE } from "../constants/action-types";
const initialState = {
  gameState: "intro",
  questions: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: action.payload };
    case TOGGLE_GAMESTATE:
      return { ...state, gameState: toggleGameState(state.gameState) };
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

const toggleGameState = (gameState) => {
  if (gameState === "intro") { return "playing" }
  return "intro";
};

export default rootReducer;
