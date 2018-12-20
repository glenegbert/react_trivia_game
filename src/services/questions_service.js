import axios from 'axios';

import {
  loadQuestions, renderErrorMessage
} from '../js/actions/index';

const fetchQuestions = (dispatch) => {
  return axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(json => dispatch(loadQuestions(json.data.results)),error => dispatch(renderErrorMessage(error.message)));
}

const questionsService = {
 fetchQuestions: fetchQuestions
};

export default questionsService;
