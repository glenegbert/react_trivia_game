export default {
  cleanQuestion: question => {
     return question.replace(/&quot;/g, '"').replace(/&#039;/g,"'")
  }
};
