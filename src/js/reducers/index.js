import { ADD_QUESTION, TOGGLE_GAMESTATE } from "../constants/action-types";
const initialState = {
  gameState: "intro",
  questions: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return { ...state, questions: [...state.questions, action.payload ] };
    case TOGGLE_GAMESTATE:
      return { ...state, gameState: toggleGameState(state.gameState) };
    default:
      return state;
  }
};

const toggleGameState = (state) => {
  if (state === "intro") { return "playing" }
  return "intro";
};

export default rootReducer;
