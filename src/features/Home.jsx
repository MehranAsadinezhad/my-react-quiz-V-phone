import React from 'react';
import Button from '../ui/Button';

export default function Home({ questionsNum, dispatch }) {
  return (
    <>
      <h3 className="my-6 text-lg font-bold tracking-wider text-light sm:mt-6 sm:text-2xl lg:text-4xl">
        Welcome to The React Quiz!
      </h3>
      <h4 className="mb-5 font-semibold text-light sm:my-6 sm:text-xl lg:text-2xl">
        {questionsNum} questions to test your React mastery
      </h4>
      <Button onClick={() => dispatch({ type: 'startTest' })}>
        Let's Start
      </Button>
    </>
  );
}
