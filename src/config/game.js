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

export const sections = {
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
    section: sections.UPPER,
    score: 0
  },
  {
    id: 'twos',
    displayName: '2s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 2),
    section: sections.UPPER,
    score: 0
  },
  {
    id: 'threes',
    displayName: '3s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 3),
    section: sections.UPPER,
    score: 0
  },
  {
    id: 'fours',
    displayName: '4s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 4),
    section: sections.UPPER,
    score: 0
  },
  {
    id: 'fives',
    displayName: '5s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 5),
    section: sections.UPPER,
    score: 0
  },
  {
    id: 'sixes',
    displayName: '6s',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => upperSectionValueFormula(dice, 6),
    section: sections.UPPER,
    score: 0
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
    section: sections.LOWER,
    score: 0
  },
  {
    id: 'two-pairs',
    displayName: 'Two Pairs',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => {
      let firstPair = null;
      let secondPair = null;

      for (const die of dice) {
        const matchingDice = dice.filter(matchingDie => matchingDie.number === die.number);

        // Both pairs are the same
        if (matchingDice.length >= 4) {
          firstPair = [matchingDice[0], matchingDice[1]];
          secondPair = [matchingDice[2], matchingDice[3]];

          return [...firstPair, ...secondPair].reduce((acc, currentValue) => acc + currentValue.number, 0);
        }

        if (matchingDice.length >= 2 &! firstPair) {
          firstPair = [matchingDice[0], matchingDice[1]];
        }
      };

      const filteredDice = dice.filter(die => die.number !== firstPair[0].number);

      for (const die of filteredDice) {
        const matchingDice = filteredDice.filter(matchingDie => matchingDie.number === die.number);
  
        if (matchingDice.length >= 2 &! secondPair) {
          secondPair = [matchingDice[0], matchingDice[1]];

          return [...firstPair, ...secondPair].reduce((acc, currentValue) => acc + currentValue.number, 0);
        }
      }

      return 0;
    },
    section: sections.LOWER,
    score: 0
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
    section: sections.LOWER,
    score: 0
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
    section: sections.LOWER,
    score: 0
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
    section: sections.LOWER,
    score: 0
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
    section: sections.LOWER,
    score: 0
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
    section: sections.LOWER,
    score: 0
  },
  {
    id: 'yahtzee',
    displayName: 'Yahtzee',
    valueType: valueTypes.FIXED,
    valueFormula: dice => dice.every(die => die.number === dice[0].number) ? 50 : 0,
    section: sections.LOWER,
    score: 0
  },
  {
    id: 'chance',
    displayName: 'Chance',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => dice.reduce((acc, currentValue) => acc + currentValue.number, 0),
    section: sections.LOWER,
    score: 0
  }
];
