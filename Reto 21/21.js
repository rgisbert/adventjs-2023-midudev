function findBalancedSegment(message) {
  const countOnes = (arr) => arr.filter((o) => o === 1).length;
  let idxResult = [];

  for (let i = 0; i < message.length; i++) {
    for (let j = i + 1; j < message.length; j++) {
      // Is even to compare 0s and 1s?
      if ((j + 1 - i) % 2 === 0) {
        const test = message.slice(i, j + 1);

        if (test.length / 2 === countOnes(test)) {
          const [a, b] = idxResult;
          if (idxResult.length === 0 || b - a < j - i) {
            idxResult = [i, j];
          }
        }
      }
    }
  }

  return idxResult;
}
