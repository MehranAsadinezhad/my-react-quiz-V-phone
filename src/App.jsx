import { useEffect, useReducer } from 'react';
import Header from './features/Header';
import Home from './features/Home';
import Questions from './features/Questions';
import Button from './ui/Button';

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error', error: action.payload };
    case 'startTest':
      const t = 30;
      return {
        ...state,
        status: 'test',
        secondsRemaining: state.questions.length * t,
      };
    case 'newAnswer':
      const currentQuestion = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finishedTest':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'testAgain':
      return { ...initialState, questions: state.questions, status: 'ready' };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    default:
      throw new Error('Invalid action type');
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining,error },
    dispatch,
  ] = useReducer(reducer, initialState);
  const questionsNum = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed', payload: err.message }));
  }, []);

  return (
    <>
      <Header />
      <main className=" flex flex-col items-center justify-center">
        {status === 'error' && (
          <p className="w-96 rounded-full bg-dark p-4 text-center text-2xl text-light ">
            🟠 {error}
          </p>
        )}
        {status === 'loading' && (
          <p className="w-96 rounded-full bg-dark p-4 text-center text-2xl text-light ">
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
            answer={answer}
            points={points}
            index={index}
            questions={questions}
            secondsRemaining={secondsRemaining}
          />
        )}
        {status === 'finished' && (
          <div className="flex flex-col items-center justify-center space-y-8">
            <p className="mt-20 w-64 md:w-96 rounded-full bg-cyan py-1 md:py-5 text-center md:text-xl font-semibold text-light">
              You scored {points} out of {maxPossiblePoints} (
              {Math.ceil((points / maxPossiblePoints) * 100)}%)
            </p>
            <p className="text-lg text-light">
              (Highscore: {highscore} points)
            </p>
            <Button onClick={() => dispatch({ type: 'testAgain' })}>
              Restart
            </Button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
