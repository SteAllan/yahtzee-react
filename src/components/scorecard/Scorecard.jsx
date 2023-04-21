import { useContext } from "react";
import { rules } from "../../config/game";
import { DiceContext } from '../../context';

export const Scorecard = () => {
  const { dice } = useContext(DiceContext);

  return (
    <div>
      <p>Scorecard</p>
      <table>
        <tbody>
          <tr>
            <th>Turn</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>{rules.upperSection.turns[0].displayName}</td>
            <td>{rules.upperSection.turns[0].valueFormula(dice)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
