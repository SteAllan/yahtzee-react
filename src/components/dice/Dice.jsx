import React, { useContext, useState } from 'react';
import { maxRolls } from '../../config/game';
import { holdDie, incrementRolls, resetDice, resetRolls, rollDice } from './functions';
import './dice.css';
import { DiceContext, GameContext } from '../../context';

export const Dice = () => {
  const { dice, setDice } = useContext(DiceContext);
  const [rolls, setRolls] = useState(0);
  const { game, setGame } = useContext(GameContext);

  function handleRollButtonClick() {
    if (rolls < maxRolls) {
      rollDice({ dice, diceSetter: setDice });
      setRolls(incrementRolls({ rolls }));
    }
  }

  function handleDieClick(number) {
    if (rolls > 0 && rolls < maxRolls) {
      holdDie({ dice, dieNumber: number, diceSetter: setDice });
    }
  }

  function handleEndTurnButtonClick() {
    resetRolls({ rollSetter: setRolls });
    resetDice({ dice, diceSetter: setDice });

    // Set score
    let newGame = game;
    const currentTurn = newGame.find(turn => turn.isCurrent);
    currentTurn.score = currentTurn.valueFormula(dice);
    
    // Set turn
    const turnIndex = newGame.indexOf(currentTurn);
    currentTurn.isCurrent = false;
    newGame[turnIndex + 1].isCurrent = true;

    setGame(newGame);
  }

  return (
    <>
      <div className="box">
        {dice.map((die, index) => (
          <span key={index} className={`die ${die.held ? 'die--held' : ''}`} onClick={() => handleDieClick(index)}>{die.number}</span>
        ))}
        <div>
          <button onClick={() => handleRollButtonClick()} disabled={rolls === 3}>Roll</button>
          <button onClick={() => handleEndTurnButtonClick()} disabled={rolls < 1}>End Turn</button>
        </div>
      </div>
    </>
  );
}
