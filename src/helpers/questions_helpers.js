export default {
  cleanQuestion: question => {
     return question.replace(/&quot;/g, '"')
                    .replace(/&#039;/g,"'")
                    .replace(/&ocirc;/g,"ô")
                    .replace(/&Aring;/g,"Å")
  }
};
