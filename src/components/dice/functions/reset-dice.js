export function resetDice({ dice, diceSetter }) {
  let newDice = [...dice];

  newDice.forEach(die => {
    die.held = false;
  });

  diceSetter(newDice);
}
