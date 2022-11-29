import { useState }  from 'react';
import './App.css'
import StartPage from './components/start-page'
import GamePage from './components/gamePage'

function App(){
  const [isStart, setIsStart] = useState(false);
  const startGame = (bool) => {
        setIsStart(bool);
    }
  if (!isStart) {
    return (
      <div className = "App">
      <StartPage startGame={startGame} />
      </div>
    )
  } else {
    return (
      <div className="App">
      <GamePage />
    </div>
    )
  }
}

export default App;
