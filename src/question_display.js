import React from 'react';

const QuestionDisplay = ({ question, number, addResponse })=> {
  return (
    <div>
      <div> {question.category} </div>
      <div> {question.question.replace(/&quot;/g,'"')} </div>
      <div> {number} / 10 </div>
      <button onClick={()=>addResponse({response: true, question: question})}> True </button>
      <button onClick={()=>addResponse({response: false, question: question})}> False </button>

    </div>
  );
}

export default QuestionDisplay

