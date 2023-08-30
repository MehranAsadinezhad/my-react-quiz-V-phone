import React, { useEffect } from 'react';

export default function Timer({ dispatch, children }) {
  useEffect(
    function () {
      const time = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);
      return () => clearInterval(time);
    },
    [dispatch],
  );
  return (
    <p className="my-3 rounded-full bg-darkest px-4 py-3 text-center text-medium ring-2 ring-dark md:my-5 md:px-4 md:py-3 md:text-lg">
      {children}
    </p>
  );
}
