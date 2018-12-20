import axios from 'axios';
import {
  renderErrorMessage,
} from '../js/actions/index';

const fetchWithErrorHandling = (config, dispatch) => {
  axios.get(config.url)
    .then(response => dispatch(config.success(response),
      error => dispatch(renderErrorMessage(error.message))));
};

const ApiService = {
  fetchWithErrorHandling,
};

export default ApiService;
