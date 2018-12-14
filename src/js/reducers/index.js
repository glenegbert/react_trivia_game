import {
  ADD_QUESTIONS, UPDATE_GAMESTATE, ADD_RESPONSE, CLEAR_QUESTIONS,
} from '../constants/action-types';

const initialState = {
  gameState: 'intro',
  questions: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: action.payload};
    case UPDATE_GAMESTATE:
      return { ...state, gameState: action.payload };
    case ADD_RESPONSE:
      return { ...state, questions: addResponse(state.questions, action.payload) };
    case CLEAR_QUESTIONS:
      return { ...state, questions: [] };
    default:
      return state;
  }
};



const addResponse = (questions, response) => {
  const newQuestions = questions.filter(
    question => question !== response.question,
  );
  newQuestions
    .push(Object.assign({ response: response.response },
      response.question));
  return newQuestions;
};

export default rootReducer;
