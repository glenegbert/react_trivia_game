import { ADD_QUESTION, TOGGLE_GAMESTATE } from "../constants/action-types";
const addQuestion = question => ({ type: ADD_QUESTION, payload: question});
const toggleGameState = () => ({ type: TOGGLE_GAMESTATE });

export { addQuestion, toggleGameState };
