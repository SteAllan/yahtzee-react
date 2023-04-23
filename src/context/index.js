import { createContext } from 'react';
import { initialDiceConfig } from '../config/game';

export const DiceContext = createContext(initialDiceConfig);
export const ScoreContext = createContext(null);
export const TurnContext = createContext(null);
