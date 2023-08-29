import React from 'react';

export default function Option({ children, onClick }) {
  return (
    <button onClick={onClick} className="bg-dark text-medium hover:bg-darkest hover:ring-dark my-2 w-[500px] rounded-full px-5 py-4 text-start text-xl transition-all duration-300 hover:translate-x-5 hover:ring-2">
      {children}
    </button>
  );
}
