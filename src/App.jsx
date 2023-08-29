import { useEffect } from 'react';
import Home from './features/Home';
import Questions from './features/Questions';

function App() {
  
  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="bg-darkest fixed h-screen w-screen">
      <Home />
      {/* <Questions/> */}
    </div>
  );
}

export default App;
