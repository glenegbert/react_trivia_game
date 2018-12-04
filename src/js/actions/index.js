import { ADD_QUESTIONS, UPDATE_GAMESTATE, ADD_RESPONSE, CLEAR_QUESTIONS } from "../constants/action-types";

const addQuestions = questions => ({ type: ADD_QUESTIONS, payload: questions});

const updateGameState = gameState => ({ type: UPDATE_GAMESTATE, payload: gameState });

const addResponse= response => ({ type: ADD_RESPONSE, payload: response});

const clearQuestions = () => ({ type: CLEAR_QUESTIONS });


export { addQuestions, updateGameState, addResponse, clearQuestions };
