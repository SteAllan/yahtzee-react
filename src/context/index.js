import { createContext } from 'react';
import { initialDiceConfig } from '../config/game';

export const DiceContext = createContext(initialDiceConfig);
export const TurnContext = createContext({ currentTurn: 0 });
