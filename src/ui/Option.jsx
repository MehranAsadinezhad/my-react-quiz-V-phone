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
          className={`my-1 w-64 rounded-full 
    bg-dark text-start text-light transition-all hover:bg-darkest hover:ring-2 hover:ring-dark md:w-96 md:px-6 px-5 py-3
    md:py-4 md:text-lg
    ${hasAnswered && 'cursor-not-allowed'}
    ${index === answer ? 'md:translate-x-6 lg:translate-x-8 translate-x-3' : ''}
    ${
      index === answer && index !== question.correctOption
        ? 'ring-2 ring-red-600 hover:ring-red-600'
        : ''
    }
    ${
      hasAnswered
        ? index === question.correctOption
          ? 'ring-2 ring-green-600 hover:bg-dark hover:ring-green-600'
          : 'ring-2 ring-dark hover:bg-dark hover:ring-dark'
        : ''
    }`}
        >
          {option}
        </button>
      ))}
    </>
  );
}
