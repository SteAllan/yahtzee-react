import { useContext } from 'react';
import { GameContext, ScoreContext } from '../../context';
import { sections } from '../../config/game';

export const Scorecard = () => {
  const { game } = useContext(GameContext);
  const { score } = useContext(ScoreContext);

  return (
    <div>
      <p>Scorecard</p>
      <table>
        <tbody>
          <tr>
            <th>Turn</th>
            <th>Score</th>
          </tr>
          {game.filter(turn => turn.section === sections.UPPER).map(turn => (
            <tr key={turn.id} className={turn.isCurrent ? 'current-turn' : ''}>
              <td>{turn.displayName}</td>
              <td>{turn.score || 0}</td>
            </tr>
          ))}
          <tr>
            <td>Preliminary Total</td>
            <td>{score.upperPrelimTotal}</td>
          </tr>
          <tr>
            <td>Bonus (50)</td>
            <td>{score.upperBonus}</td>
          </tr>
          <tr>
            <td>Upper Total</td>
            <td>{score.upperTotal}</td>
          </tr>
          {game.filter(turn => turn.section === sections.LOWER).map(turn => (
            <tr key={turn.id} className={turn.isCurrent ? 'current-turn' : ''}>
              <td>{turn.displayName}</td>
              <td>{turn.score || 0}</td>
            </tr>
          ))}
          <tr>
            <td>Lower Total</td>
            <td>{score.lowerTotal}</td>
          </tr>
          <tr>
            <td>Game Total</td>
            <td>{score.gameTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
