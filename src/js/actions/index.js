import { ADD_QUESTIONS, UPDATE_GAMESTATE, ADD_RESPONSE } from "../constants/action-types";

const addQuestions = questions => ({ type: ADD_QUESTIONS, payload: questions});

const updateGameState = (gameState) => ({ type: UPDATE_GAMESTATE, payload: gameState });

const addResponse= response => ({ type: ADD_RESPONSE, payload: response});

export { addQuestions, updateGameState, addResponse };
