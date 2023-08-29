import React from 'react'

export default function Header() {
    return (
        <div className="my-8 flex items-center justify-center space-x-6">
            <img src="src\assets\logo512.png" alt="react" className="w-36"></img>
            <h1 className="font-primary text-light text-6xl font-bold">
                The React Quiz
            </h1>
        </div>
    )
}
