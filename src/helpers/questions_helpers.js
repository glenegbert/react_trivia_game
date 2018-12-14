import ReactHtmlParser from 'react-html-parser';

export default {
  parsedQuestion: question => ReactHtmlParser(question),
};
