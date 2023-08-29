import React from 'react';
import Button from '../ui/Button';

export default function Home() {
    return (
        <div>
            <div className="my-8 flex items-center justify-center space-x-6">
                <img src="src\assets\logo512.png" alt="react" className="w-36"></img>
                <h1 className="font-primary text-light text-6xl font-bold">
                    The React Quiz
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className="text-light mt-6 text-4xl font-bold tracking-wider">
                    Welcome to The React Quiz!
                </h3>
                <h4 className="text-light my-6 text-2xl font-semibold">
                    15 questions to test your React mastery
                </h4>
                <Button>Let's Start</Button>
            </div>
        </div>
    );
}
