export function holdDie({ dice, dieNumber, diceSetter }) {
  let newDice = [...dice];
  const selectedDice = newDice[dieNumber];

  selectedDice.held = !selectedDice.held;
  diceSetter(newDice);
}
