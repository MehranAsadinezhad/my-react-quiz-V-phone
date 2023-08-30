import React from 'react';
import Option from '../ui/Option';
import Button from '../ui/Button';
import Progress from '../ui/Progress';
import Timer from '../ui/Timer';

export default function Questions({
  question,
  questionsNum,
  dispatch,
  answer,
  points,
  index,
  questions,
  secondsRemaining,
}) {
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Progress questionsNum={questionsNum} index={index + 1}></Progress>
        <div className="flex items-center justify-between space-x-16">
          <p className="text-lg font-semibold text-medium">
            Question {index + 1} / {questionsNum}
          </p>
          <p className="text-lg font-semibold text-medium">
            {points} / {maxPossiblePoints}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-6 text-2xl font-semibold text-light">
          {question.question}
        </h1>
        <Option question={question} answer={answer} dispatch={dispatch} />
        <div className="flex items-center justify-between w-96">
          <Timer dispatch={dispatch}>
            {min < 10 && 0}
            {min}:{sec < 10 && 0}
            {sec}
          </Timer>
          {answer !== null && index < questionsNum - 1 && (
            <Button
              index={index}
              questionsNum={questionsNum}
              onClick={() => dispatch({ type: 'nextQuestion' })}
            >
              Next
            </Button>
          )}
          {index === questionsNum - 1 && (
            <Button
              index={index}
              questionsNum={questionsNum}
              onClick={() => dispatch({ type: 'finishedTest' })}
            >
              Finish
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
