import React from 'react';
import Option from '../ui/Option';
import Button from '../ui/Button';

export default function Questions({
    question,
    questionsNum,
    dispatch,
    answer,
    points,
    index
}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div></div>
                <div className="flex items-center justify-between space-x-16">
                    <p className="text-medium text-lg">Question {index + 1} / {questionsNum}</p>
                    <p className="text-medium text-lg">{points} / 280</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-light my-6 text-2xl font-semibold">
                    {question.question}
                </h1>
                <Option question={question} answer={answer} dispatch={dispatch}/>
                <div className='flex items-center justify-between space-x-16'>
                    <p className="bg-darkest ring-dark text-medium my-5 rounded-full px-4 py-3 text-center text-lg ring-2">
                        12:42
                    </p>
                    {answer !== null && <Button onClick={()=>dispatch({type:'nextQuestion'})}>Next</Button>}
                </div>
            </div>
        </div>
    );
}
