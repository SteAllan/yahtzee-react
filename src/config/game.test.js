import { turns } from "./game";

let toTest;

describe('in upper section', () => {
  describe('when turn is "1s"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'ones').valueFormula;
    });

    test('too few 1s does not score points in upper section', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(0);
    });

    test('three 1s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
          held: false
        },
        {
          id: 'three',
          number: 1,
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

      expect(toTest(dice)).toEqual(3);
    });

    test('more than three 1s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
          held: false
        },
        {
          id: 'three',
          number: 1,
          held: false
        },
        {
          id: 'four',
          number: 1,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(4);
    });
  });

  describe('when turn is "2s"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'twos').valueFormula;
    });

    test('too few 2s does not score points in upper section', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(0);
    });

    test('three 2s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 2,
          held: false
        },
        {
          id: 'two',
          number: 2,
          held: false
        },
        {
          id: 'three',
          number: 2,
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

      expect(toTest(dice)).toEqual(6);
    });

    test('more than three 2s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 2,
          held: false
        },
        {
          id: 'two',
          number: 2,
          held: false
        },
        {
          id: 'three',
          number: 2,
          held: false
        },
        {
          id: 'four',
          number: 2,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(8);
    });
  });

  describe('when turn is "3s"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'threes').valueFormula;
    });

    test('too few 3s does not score points in upper section', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(0);
    });

    test('three 3s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 3,
          held: false
        },
        {
          id: 'two',
          number: 3,
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

      expect(toTest(dice)).toEqual(9);
    });

    test('more than three 3s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 3,
          held: false
        },
        {
          id: 'two',
          number: 3,
          held: false
        },
        {
          id: 'three',
          number: 3,
          held: false
        },
        {
          id: 'four',
          number: 3,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(12);
    });
  });

  describe('when turn is "4s"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'fours').valueFormula;
    });

    test('too few 4s does not score points in upper section', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(0);
    });

    test('three 4s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 4,
          held: false
        },
        {
          id: 'two',
          number: 4,
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

      expect(toTest(dice)).toEqual(12);
    });

    test('more than three 4s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 4,
          held: false
        },
        {
          id: 'two',
          number: 4,
          held: false
        },
        {
          id: 'three',
          number: 4,
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

      expect(toTest(dice)).toEqual(16);
    });
  });

  describe('when turn is "5s"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'fives').valueFormula;
    });

    test('too few 5s does not score points in upper section', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(0);
    });

    test('three 5s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 5,
          held: false
        },
        {
          id: 'two',
          number: 5,
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

      expect(toTest(dice)).toEqual(15);
    });

    test('more than three 5s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 5,
          held: false
        },
        {
          id: 'two',
          number: 5,
          held: false
        },
        {
          id: 'three',
          number: 5,
          held: false
        },
        {
          id: 'four',
          number: 3,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(20);
    });
  });

  describe('when turn is "6s"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'sixes').valueFormula;
    });

    test('too few 6s does not score points in upper section', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(0);
    });

    test('three 6s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 6,
          held: false
        },
        {
          id: 'two',
          number: 6,
          held: false
        },
        {
          id: 'three',
          number: 6,
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

      expect(toTest(dice)).toEqual(18);
    });

    test('more than three 6s scores points in upper section', () => {
      const dice = [
        {
          id: 'one',
          number: 6,
          held: false
        },
        {
          id: 'two',
          number: 6,
          held: false
        },
        {
          id: 'three',
          number: 6,
          held: false
        },
        {
          id: 'four',
          number: 6,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(24);
    });
  });
});

describe('in lower section', () => {
  describe('when turn is "one pair"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'one-pair').valueFormula;
    });

    test('no matching pair does not score points', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(0);
    });

    test('one matching pair scores the sum of the pair', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
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

      expect(toTest(dice)).toEqual(2);
    });

    test('two matching pairs scores the sum of the highest-value pair', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
          held: false
        },
        {
          id: 'three',
          number: 3,
          held: false
        },
        {
          id: 'four',
          number: 3,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(6);
    });
  });

  describe('when turn is "two pairs"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'two-pairs').valueFormula;
    });

    test('fewer than two matching pairs scores no points', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
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

      expect(toTest(dice)).toEqual(0);
    });

    test('two matching pairs scores the sum of the two pairs', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
          held: false
        },
        {
          id: 'three',
          number: 3,
          held: false
        },
        {
          id: 'four',
          number: 3,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(8);
    });

    test('four matching dice scores the sum of the two pairs', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
          held: false
        },
        {
          id: 'three',
          number: 1,
          held: false
        },
        {
          id: 'four',
          number: 1,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(4);
    });
  });

  describe('when turn is "three alike"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'three-alike').valueFormula;
    });

    test('fewer than three matching dice does not score points', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
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

      expect(toTest(dice)).toEqual(0);
    });

    test('three matching dice scores the sum of those dice', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
          held: false
        },
        {
          id: 'three',
          number: 1,
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

      expect(toTest(dice)).toEqual(3);
    });
  });

  describe('when turn is "four alike"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'four-alike').valueFormula;
    });

    test('fewer than four matching dice does not score points', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
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

      expect(toTest(dice)).toEqual(0);
    });

    test('four matching dice scores the sum of those dice', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
          held: false
        },
        {
          id: 'three',
          number: 1,
          held: false
        },
        {
          id: 'four',
          number: 1,
          held: false
        },
        {
          id: 'five',
          number: 5,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(4);
    });
  });

  describe('when turn is "full house"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'full-house').valueFormula;
    });

    test('less than a pair and a trio scores no points', () => {
      const dice = [
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
          number: 3,
          held: false
        },
        {
          id: 'five',
          number: 3,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(0);
    });

    test('a pair and a trio scores 25 points', () => {
      const dice = [
        {
          id: 'one',
          number: 2,
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
          number: 3,
          held: false
        },
        {
          id: 'five',
          number: 3,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(25);
    });
  });

  describe('when turn is "little straight"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'little-straight').valueFormula;
    });

    test('an incomplete run does not score points', () => {
      const dice = [
        {
          id: 'one',
          number: 2,
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

      expect(toTest(dice)).toEqual(0);
    });

    test('a run of 1, 2, 3, 4, 5 scores 15 points', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(15);
    });
  });

  describe('when turn is "big straight"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'big-straight').valueFormula;
    });

    test('an incomplete run does not score points', () => {
      const dice = [
        {
          id: 'one',
          number: 2,
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

      expect(toTest(dice)).toEqual(0);
    });

    test('a run of 2, 3, 4, 5, 6 scores 20 points', () => {
      const dice = [
        {
          id: 'one',
          number: 2,
          held: false
        },
        {
          id: 'two',
          number: 3,
          held: false
        },
        {
          id: 'three',
          number: 4,
          held: false
        },
        {
          id: 'four',
          number: 5,
          held: false
        },
        {
          id: 'five',
          number: 6,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(20);
    });
  });
  
  describe('when turn is "yahtzee"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'yahtzee').valueFormula;
    });

    test('fewer than five matching dice does not score points', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(0);
    });

    test('five matching dice scores 50 points', () => {
      const dice = [
        {
          id: 'one',
          number: 1,
          held: false
        },
        {
          id: 'two',
          number: 1,
          held: false
        },
        {
          id: 'three',
          number: 1,
          held: false
        },
        {
          id: 'four',
          number: 1,
          held: false
        },
        {
          id: 'five',
          number: 1,
          held: false
        }
      ];

      expect(toTest(dice)).toEqual(50);
    });
  });

  describe('when turn is "chance"', () => {
    beforeAll(() => {
      toTest = turns.find(turn => turn.id === 'chance').valueFormula;
    });

    test('scores the sum of all dice', () => {
      const dice = [
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

      expect(toTest(dice)).toEqual(15);
    });
  });
});
