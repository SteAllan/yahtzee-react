import { useContext } from 'react';
import { turns } from '../../config/game';
import { DiceContext, TurnContext } from '../../context';

export const Scorecard = () => {
  const { dice } = useContext(DiceContext);
  const { currentTurn } = useContext(TurnContext);

  return (
    <div>
      <p>Scorecard</p>
      <table>
        <tbody>
          <tr>
            <th>Turn</th>
            <th>Score</th>
          </tr>
          {turns.map(turn => (
            <tr key={turn.id} className={turn.id === currentTurn.turn
            .id ? 'current-turn' : ''}>
              <td>{turn.displayName}</td>
              <td>{turn.valueFormula(dice)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
