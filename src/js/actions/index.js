import { ADD_QUESTIONS, TOGGLE_GAMESTATE, ADD_RESPONSE } from "../constants/action-types";

const addQuestions = questions => ({ type: ADD_QUESTIONS, payload: questions});

const toggleGameState = () => ({ type: TOGGLE_GAMESTATE });

const addResponse= response => ({ type: ADD_RESPONSE, payload: response});

export { addQuestions, toggleGameState, addResponse };
