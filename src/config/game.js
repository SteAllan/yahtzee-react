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
    id: 'chance',
    displayName: 'Chance',
    valueType: valueTypes.DYNAMIC,
    valueFormula: dice => dice.reduce((acc, currentValue) => acc + currentValue.number, 0),
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
  }
];
