import ApiService from './api_service';

import {
  loadQuestions,
} from '../js/actions/index';

const fetchQuestions = (dispatch) => {
  ApiService.fetchWithErrorHandling({
    url: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
    success: response => loadQuestions(response.data.results),
  }, dispatch);
};

const questionsService = {
  fetchQuestions,
};

export default questionsService;
