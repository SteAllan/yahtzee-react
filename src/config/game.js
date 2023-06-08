export const maxRolls = 3;

export const initialDiceConfig = [
  {
    id: 'one',
    number: 1,
    held: false
  },
  {
    id: 'two',
    number: 2,
    held: false
  },
  {
    id: 'three',
    number: 3,
    held: false
  },
  {
    id: 'four',
    number: 4,
    held: false
  },
  {
    id: 'five',
    number: 5,
    held: false
  }
];

const valueTypes = {
  DYNAMIC: 'dynamic',
  FIXED: 'fixed'
};

const sections = {
  UPPER: 'upper',
  LOWER: 'lower'
};

const upperSectionValueFormula = (dice, numberToAchieve) => {
  const filteredDice = dice.filter(die => die.number === numberToAchieve);

  if (filteredDice.length >= 3) {
    return filteredDice.reduce((acc, currentValue) => acc + currentValue.number, 0);
  }

  return 0;
};

export const turns = [
  {
    id: 'ones',
    displayName: '1s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 1),
    section: sections.UPPER
  },
  {
    id: 'twos',
    displayName: '2s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 2),
    section: sections.UPPER
  },
  {
    id: 'threes',
    displayName: '3s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 3),
    section: sections.UPPER
  },
  {
    id: 'fours',
    displayName: '4s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 4),
    section: sections.UPPER
  },
  {
    id: 'fives',
    displayName: '5s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 5),
    section: sections.UPPER
  },
  {
    id: 'sixes',
    displayName: '6s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 6),
    section: sections.UPPER
  },
  {
    id: 'one-pair',
    displayName: 'One Pair',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => {
      let score = 0;

      dice.forEach(die => {
        const otherDice = dice.filter(otherDie => otherDie.id !== die.id);
        const matchingDie = otherDice.find(otherDie => otherDie.number === die.number);
        
        if (matchingDie) {
          const matchingPairValue = [die, matchingDie].reduce((acc, currentValue) => acc + currentValue.number, 0);
          
          if (matchingPairValue > score) {
            score = matchingPairValue;
          }
        }
      });

      return score;
    },
    section: sections.LOWER
  },
  {
    id: 'two-pairs',
    displayName: 'Two Pairs',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => {
      let reducableDice;
      let scoreableDice = [];
      
      // Find first pair
      for (let i = 0; i < dice.length; i++) {
        const diceToCompare = [...dice];
        diceToCompare.splice(i, 1);

        const matchingDieIndex = diceToCompare.findIndex((die => die.number === dice[i].number));

        if (matchingDieIndex > -1) {
          scoreableDice.push(dice[i], diceToCompare[matchingDieIndex]);
          diceToCompare.splice(matchingDieIndex, 1);
          reducableDice = [...diceToCompare];
          break;
        }

        return 0;
      }

      // Find second pair
      for (let i = 0; i < reducableDice.length; i++) {
        const diceToCompare = [...reducableDice];
        diceToCompare.splice(i, 1);

        const matchingDie = diceToCompare.find(die => die.number === reducableDice[i].number);

        if (matchingDie) {
          scoreableDice.push(reducableDice[i], matchingDie);
          break;
        }

        return 0;
      }

      return scoreableDice.reduce((acc, currentValue) => acc + currentValue.number, 0);
    },
    section: sections.LOWER
  },
  {
    id: 'three-alike',
    displayName: 'Three Alike',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => {
      let scoreableDice = [];

      for (const die of dice) {
        const matchingDice = dice.filter(matchingDie => matchingDie.number === die.number);

        if (matchingDice.length >= 3) {
          scoreableDice = [matchingDice[0], matchingDice[1], matchingDice[2]];
          break;
        }
      }

      if (scoreableDice.length) {
        return scoreableDice.reduce((acc, currentValue) => acc + currentValue.number, 0);
      }

      return 0;
    },
    section: sections.LOWER
  },
  {
    id: 'four-alike',
    displayName: 'Four Alike',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => {
      let scoreableDice = [];

      for (const die of dice) {
        const matchingDice = dice.filter(matchingDie => matchingDie.number === die.number);

        if (matchingDice.length >= 4) {
          scoreableDice = [matchingDice[0], matchingDice[1], matchingDice[2], matchingDice[3]];
          break;
        }
      }

      if (scoreableDice.length) {
        return scoreableDice.reduce((acc, currentValue) => acc + currentValue.number, 0);
      }

      return 0;
    },
    section: sections.LOWER
  },
  {
    id: 'full-house',
    displayName: 'Full House',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => {
      let pair = null;
      let trio = null;

      dice.forEach(die => {
        const matchingDice = dice.filter(matchingDie => matchingDie.number === die.number);

        if (matchingDice.length === 2 && !pair) {
          pair = matchingDice;
        }

        if (matchingDice.length === 3 && !trio) {
          trio = matchingDice;
        }
      });

      if (pair?.length === 2 && trio?.length === 3) {
        return 25;
      }

      return 0;
    },
    section: sections.LOWER
  },
  {
    id: 'little-straight',
    displayName: 'Little Straight',
    valueType: valueTypes.FIXED,
    value: 15,
    valueFormula: dice => {
      if (!dice.some(die => die.number === 1)) {
        return 0;
      }

      if (!dice.some(die => die.number === 2)) {
        return 0;
      }

      if (!dice.some(die => die.number === 3)) {
        return 0;
      }

      if (!dice.some(die => die.number === 4)) {
        return 0;
      }

      if (!dice.some(die => die.number === 5)) {
        return 0;
      }

      return 15;
    },
    section: sections.LOWER
  },
  {
    id: 'big-straight',
    displayName: 'Big Straight',
    valueType: valueTypes.FIXED,
    value: 20,
    valueFormula: dice => {
      if (!dice.some(die => die.number === 2)) {
        return 0;
      }

      if (!dice.some(die => die.number === 3)) {
        return 0;
      }

      if (!dice.some(die => die.number === 4)) {
        return 0;
      }

      if (!dice.some(die => die.number === 5)) {
        return 0;
      }

      if (!dice.some(die => die.number === 6)) {
        return 0;
      }

      return 20;
    },
    section: sections.LOWER
  },
  {
    id: 'yahtzee',
    displayName: 'Yahtzee',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => {
      if (dice.every(die => die.number === dice[0].number)) {
        return dice.reduce((acc, currentValue) => acc + currentValue.number, 0);
      }
      return 0;
    },
    section: sections.LOWER
  },
  {
    id: 'chance',
    displayName: 'Chance',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => dice.reduce((acc, currentValue) => acc + currentValue.number, 0),
    section: sections.LOWER
  }
];
