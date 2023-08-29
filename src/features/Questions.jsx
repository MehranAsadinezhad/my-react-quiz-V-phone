import React from 'react';
import Option from '../ui/Option';

export default function Questions() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="my-8 flex items-center justify-center space-x-6">
                <img src="src\assets\logo512.png" alt="react" className="w-36"></img>
                <h1 className="font-primary text-light text-6xl font-bold">
                    The React Quiz
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div></div>
                <div className="flex items-center justify-between space-x-10">
                    <p className="text-medium text-lg">Question 1 / 15</p>
                    <p className="text-medium text-lg">0 / 280</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-light my-6 text-2xl font-semibold">xquestion</h1>
                <Option></Option>
                <p className="bg-darkest ring-dark text-medium my-5 rounded-full px-4 py-3 text-center text-lg ring-2">
                    12:42
                </p>
            </div>
        </div>
    );
}
