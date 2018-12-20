import * as constants  from '../constants/action-types';

const loadQuestions = questions => ({ type: constants.LOAD_QUESTIONS, payload: questions });

const addResponse = response => ({ type: constants.ADD_RESPONSE, payload: response });

const clearQuestions = () => ({ type: constants.CLEAR_QUESTIONS });

const clearErrorMessage = () => ({ type: constants.CLEAR_ERROR_MESSAGE});

const renderErrorMessage = message => ({ type: constants.RENDER_ERROR_MESSAGE, payload: message })


export {
  addResponse, clearQuestions, clearErrorMessage, loadQuestions, renderErrorMessage
};
