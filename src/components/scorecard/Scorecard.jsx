import { useContext } from 'react';
import { GameContext } from '../../context';

export const Scorecard = () => {
  const { game } = useContext(GameContext);

  return (
    <div>
      <p>Scorecard</p>
      <table>
        <tbody>
          <tr>
            <th>Turn</th>
            <th>Score</th>
          </tr>
          {game.map(turn => (
            <tr key={turn.id} className={turn.isCurrent ? 'current-turn' : ''}>
              <td>{turn.displayName}</td>
              <td>{turn.score || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
