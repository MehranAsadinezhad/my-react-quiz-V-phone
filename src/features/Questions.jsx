import React from 'react';
import Option from '../ui/Option';

export default function Questions({ question, questionsNum, dispatch }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div></div>
        <div className="flex items-center justify-between space-x-10">
          <p className="text-medium text-lg">Question 1 / {questionsNum}</p>
          <p className="text-medium text-lg">0 / 280</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-light my-6 text-2xl font-semibold">
          {question.question}
        </h1>
        {question.options.map((option) => (
          <Option option={option}>{option}</Option>
        ))}
        <p className="bg-darkest ring-dark text-medium my-5 rounded-full px-4 py-3 text-center text-lg ring-2">
          12:42
        </p>
      </div>
    </div>
  );
}
