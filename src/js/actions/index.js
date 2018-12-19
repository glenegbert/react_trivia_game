import {
  ADD_QUESTIONS, ADD_RESPONSE, CLEAR_QUESTIONS,
} from '../constants/action-types';
import QuestionsService from '../../services/questions_service';

const fetchAndAddQuestions = (dispatch) => {
    QuestionsService.fetchQuestions(dispatch, addQuestions)
};

const addQuestions = questions => ({ type: ADD_QUESTIONS, payload: questions });

const addResponse = response => ({ type: ADD_RESPONSE, payload: response });

const clearQuestions = () => ({ type: CLEAR_QUESTIONS });


export {
  addQuestions, addResponse, clearQuestions, fetchAndAddQuestions
};
