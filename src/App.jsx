import { useReducer } from 'react';
import Header from './features/Header';
import Home from './features/Home';
import Questions from './features/Questions';
import Button from './ui/Button';

const fakeQuestion = {
  "questions": [
    {
      "question": "Which is the most popular JavaScript framework?",
      "options": ["Angular", "React", "Svelte", "Vue"],
      "correctOption": 1,
      "points": 10
    },
    {
      "question": "Which company invented React?",
      "options": ["Google", "Apple", "Netflix", "Facebook"],
      "correctOption": 3,
      "points": 10
    },
    {
      "question": "What's the fundamental building block of React apps?",
      "options": ["Components", "Blocks", "Elements", "Effects"],
      "correctOption": 0,
      "points": 10
    },
    {
      "question": "What's the name of the syntax we use to describe the UI in React components?",
      "options": ["FBJ", "Babel", "JSX", "ES2015"],
      "correctOption": 2,
      "points": 10
    },
    {
      "question": "How does data flow naturally in React apps?",
      "options": [
        "From parents to children",
        "From children to parents",
        "Both ways",
        "The developers decides"
      ],
      "correctOption": 0,
      "points": 10
    },
    {
      "question": "How to pass data into a child component?",
      "options": ["State", "Props", "PropTypes", "Parameters"],
      "correctOption": 1,
      "points": 10
    },
    {
      "question": "When to use derived state?",
      "options": [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable"
      ],
      "correctOption": 3,
      "points": 30
    },
    {
      "question": "What triggers a UI re-render in React?",
      "options": [
        "Running an effect",
        "Passing props",
        "Updating state",
        "Adding event listeners to DOM elements"
      ],
      "correctOption": 2,
      "points": 20
    },
    {
      "question": "When do we directly \"touch\" the DOM in React?",
      "options": [
        "When we need to listen to an event",
        "When we need to change the UI",
        "When we need to add styles",
        "Almost never"
      ],
      "correctOption": 3,
      "points": 20
    },
    {
      "question": "In what situation do we use a callback to update state?",
      "options": [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state"
      ],
      "correctOption": 3,
      "points": 30
    },
    {
      "question": "If we pass a function to useState, when will that function be called?",
      "options": [
        "On each re-render",
        "Each time we update the state",
        "Only on the initial render",
        "The first time we update the state"
      ],
      "correctOption": 2,
      "points": 30
    },
    {
      "question": "Which hook to use for an API request on the component's initial render?",
      "options": ["useState", "useEffect", "useRef", "useReducer"],
      "correctOption": 1,
      "points": 10
    },
    {
      "question": "Which variables should go into the useEffect dependency array?",
      "options": [
        "Usually none",
        "All our state variables",
        "All state and props referenced in the effect",
        "All variables needed for clean up"
      ],
      "correctOption": 2,
      "points": 30
    },
    {
      "question": "An effect will always run on the initial render.",
      "options": [
        "True",
        "It depends on the dependency array",
        "False",
        "In depends on the code in the effect"
      ],
      "correctOption": 0,
      "points": 30
    },
    {
      "question": "When will an effect run if it doesn't have a dependency array?",
      "options": [
        "Only when the component mounts",
        "Only when the component unmounts",
        "The first time the component re-renders",
        "Each time the component is re-rendered"
      ],
      "correctOption": 3,
      "points": 20
    }
  ]
}

const initialState = {
  questions: fakeQuestion.questions,
  status: 'ready',
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
    { questions, status, index, answer, points, highscore, secondsRemaining},
    dispatch,
  ] = useReducer(reducer, initialState);
  const questionsNum = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );


  return (
    <>
      <Header />
      <main className=" flex flex-col items-center justify-center">
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
