import axios from 'axios';

const fetchQuestions = (dispatch, loadQuestions) => {
  return axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(json => dispatch(loadQuestions(json.data.results)));

}

const questionsService = {
 fetchQuestions: fetchQuestions
};


export default questionsService;
