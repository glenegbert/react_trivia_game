const questionCorrect = (question) => {
    return question.response.toString() === question.correct_answer.toLowerCase();
}

export default {
  numberCorrect: (questions) => {
    return questions.filter(question => {
       return questionCorrect(question)
    }).length
  },
  questionCorrect: questionCorrect
}


