import { useState } from 'react';
import './App.css';
import { Dice } from './components/dice/Dice';
import { Scorecard } from './components/scorecard/Scorecard';
import { initialDiceConfig } from './config/game';
import { DiceContext, TurnContext } from './context';

function App() {
  const [dice, setDice] = useState(initialDiceConfig);
  const diceManager = { dice, setDice };

  const [currentTurn, setCurrentTurn] = useState(0);
  const turnManager = { currentTurn, setCurrentTurn };

  return (
    <DiceContext.Provider value={diceManager}>
      <TurnContext.Provider value={turnManager}>
        <p>Current Turn: {currentTurn}</p>
        <Dice />
        <Scorecard />
      </TurnContext.Provider>
    </DiceContext.Provider>
  );
}

export default App;
