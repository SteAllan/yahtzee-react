import { useState } from 'react';
import './App.css';
import { Dice } from './components/dice/Dice';
import { Scorecard } from './components/scorecard/Scorecard';
import { initialDiceConfig, turns } from './config/game';
import { DiceContext, ScoreContext, TurnContext } from './context';

function App() {
  const [dice, setDice] = useState(initialDiceConfig);
  const diceManager = { dice, setDice };

  const [currentTurn, setCurrentTurn] = useState({
    index: 0,
    turn: turns[0]
  });
  const turnManager = { currentTurn, setCurrentTurn };

  const [score, setScore] = useState([]);
  const scoreManager = { score, setScore };

  return (
    <DiceContext.Provider value={diceManager}>
      {/* <ScoreContext.Provider value={scoreManager}> */}
        <TurnContext.Provider value={turnManager}>
          <Dice />
          <Scorecard />
        </TurnContext.Provider>
      {/* </ScoreContext.Provider> */}
    </DiceContext.Provider>
  );
}

export default App;
