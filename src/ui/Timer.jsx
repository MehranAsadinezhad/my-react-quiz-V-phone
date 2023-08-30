import React, { useEffect } from 'react'

export default function Timer({ dispatch, children }) {
    useEffect(function () {
        const time = setInterval(() => {
            dispatch({ type: 'tick' })
        }, 1000);
        return () => clearInterval(time);
    }, [dispatch])
    return (
        <p className="my-5 rounded-full bg-darkest px-4 py-3 text-center text-lg text-medium ring-2 ring-dark">
            {children}
        </p>
    )
}
