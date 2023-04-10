export function rollDice({ dice, diceSetter }) {
  let newDice = [...dice];

  dice.forEach(die => {
    if (!die.held) {
      die.number = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    }
  });

  diceSetter(newDice);
}
