import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-dark px-4 
  py-3 text-light transition-all hover:bg-darkest hover:ring-2 hover:ring-dark sm:px-4 sm:py-3 sm:text-lg lg:px-6 lg:py-4 lg:text-xl  md:my-5 md:px-4 md:py-3 md:text-lg"
    >
      {children}
    </button>
  );
}
