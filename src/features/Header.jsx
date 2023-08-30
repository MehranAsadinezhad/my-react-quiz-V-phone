import React from 'react';
import reactImg from "../assets/logo512.png"

export default function Header() {
  return (
    <div className="my-6 flex items-center justify-center space-x-2 sm:my-8 sm:space-x-6 xl:space-x-10">
      <img
        src={reactImg}
        alt="react"
        className="w-16 md:w-32 lg:w-44"
      ></img>
      <h1 className="font-primary text-2xl font-bold text-light sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
        The React Quiz
      </h1>
    </div>
  );
}
