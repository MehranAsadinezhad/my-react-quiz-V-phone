import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-dark text-light hover:bg-darkest 
  hover:ring-dark rounded-full px-6 py-4 text-lg transition-all hover:ring-2">
      {children}
    </button>
  );
}
