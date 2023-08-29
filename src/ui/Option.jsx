import React from 'react';

export default function Option({ answer, question, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <>
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          className={`bg-dark text-light hover:bg-darkest 
    hover:ring-dark my-1 w-96 rounded-full px-6 py-4 text-start text-lg
    transition-all hover:ring-2
    ${hasAnswered && 'cursor-not-allowed' }
    ${index === answer ? 'translate-x-9' : ''}
    ${index === answer && index !== question.correctOption ? 'ring-2 ring-red-600 hover:ring-red-600':'' }
    ${
      hasAnswered
        ? index === question.correctOption
          ? 'ring-2 ring-green-600 hover:bg-dark hover:ring-green-600'
          : 'ring-2 ring-dark hover:ring-dark hover:bg-dark'
        : ''
    }`}
        >
          {option}
        </button>
      ))}
    </>
  );
}
