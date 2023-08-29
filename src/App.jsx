import { useEffect, useReducer } from 'react';
import Header from './features/Header';
import Home from './features/Home';
import Questions from './features/Questions';

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading',
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'startTest':
      return { ...state, status: 'test' };
    default:
      throw new Error('Invalid action type');
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);
  const questionsNum = questions.length;

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <>
      <Header />
      <main className=" flex flex-col items-center justify-center">
        {status === 'error' && (
          <p className="bg-dark text-light w-96 rounded-full p-4 text-center text-2xl ">
            🟠 There is an error
          </p>
        )}
        {status === 'loading' && (
          <p className="bg-dark text-light w-96 rounded-full p-4 text-center text-2xl ">
            ⏳ Loading
          </p>
        )}
        {status === 'ready' && (
          <Home questionsNum={questionsNum} dispatch={dispatch} />
        )}
        {status === 'test' && (
          <Questions
            question={questions[index]}
            dispatch={dispatch}
            questionsNum={questionsNum}
          />
        )}
      </main>
    </>
  );
}

export default App;
