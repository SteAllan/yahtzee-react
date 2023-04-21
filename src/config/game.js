export const maxRolls = 3;

export const initialDiceConfig = [
  {
    number: 1,
    held: false
  },
  {
    number: 2,
    held: false
  },
  {
    number: 3,
    held: false
  },
  {
    number: 4,
    held: false
  },
  {
    number: 5,
    held: false
  }
];

const valueTypes = {
  DYNAMIC: 'dynamic',
  FIXED: 'fixed'
}

const upperSectionValueFormula = (dice, numberToAchieve) => {
  const filteredDice = dice.filter(die => die.number === numberToAchieve);

  if (filteredDice.length >= 3) {
    return filteredDice.reduce((acc, currentValue) => acc + currentValue.number, 0);
  }

  return 0;
};

export const rules = {
  upperSection: {
    turns: [
      {
        displayName: '1s',
        valueType: valueTypes.DYNAMIC,
        valueFormula: dice => upperSectionValueFormula(dice, 1)
      },
      {
        displayName: '2s',
        valueType: valueTypes.DYNAMIC,
        valueFormula: dice => upperSectionValueFormula(dice, 2)
      }
    ],
    totals: []
  },
  lowerSection: {}
};
