import React from 'react';
import Button from '../ui/Button';

export default function Home({ questionsNum, dispatch }) {
    return (
        <>

            <h3 className="text-light mt-6 text-4xl font-bold tracking-wider">
                Welcome to The React Quiz!
            </h3>
            <h4 className="text-light my-6 text-2xl font-semibold">
                {questionsNum} questions to test your React mastery
            </h4>
            <Button onClick={() => dispatch({ type: 'startTest' })}>Let's Start</Button>

        </>
    );
}
