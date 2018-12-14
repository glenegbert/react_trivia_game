import {
  ADD_QUESTIONS, UPDATE_GAMESTATE, ADD_RESPONSE, CLEAR_QUESTIONS,
} from '../constants/action-types';
import axios from 'axios';

const fetchAndAddQuestions = (dispatch) => {
  axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(json => dispatch(addQuestions(json.data.results)));
};

 const addQuestions = questions => ({ type: ADD_QUESTIONS, payload: questions });

const updateGameState = gameState => ({ type: UPDATE_GAMESTATE, payload: gameState });

const addResponse = response => ({ type: ADD_RESPONSE, payload: response });

const clearQuestions = () => ({ type: CLEAR_QUESTIONS });


export {
  addQuestions, updateGameState, addResponse, clearQuestions, fetchAndAddQuestions
};
