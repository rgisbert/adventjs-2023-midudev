// Solución 2. Con string mejora complejidad, no ops
function drawClock(time) {
  const nums = {
    ':': [' ', ' ', '*', ' ', '*', ' ', ' '],
    0: ['***', '* *', '* *', '* *', '* *', '* *', '***'],
    1: ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
    2: ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
    3: ['***', '  *', '  *', '***', '  *', '  *', '***'],
    4: ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
    5: ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
    6: ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
    7: ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
    8: ['***', '* *', '* *', '***', '* *', '* *', '***'],
    9: ['***', '* *', '* *', '***', '  *', '  *', '***'],
  }
  const [h1, h2, , m1, m2] = [...time]

  return Array(nums[0].length)
    .fill()
    .map((_, i) => {
      const h = `${nums[h1][i]} ${nums[h2][i]} ${nums[':'][i]} `
      const m = `${nums[m1][i]} ${nums[m2][i]}`
      return [...h, ...m]
    })
}

/* Solución 1:
function drawClock(time) {
  const draw = '*'
  const row = Array(17).fill(' ')
  const clock = [
    [...row],
    [...row],
    [...row],
    [...row],
    [...row],
    [...row],
    [...row],
  ]

  const paintNumber = (num, init) => {
    const startCol = [0, 4, 10, 14]
    const selectedNum = numbers[num]
    let i = 0

    for (const c in selectedNum) {
      const column = startCol[init] + i
      selectedNum[c].forEach(n => (clock[n][column] = draw))
      i++
    }
  }

  const numbers = {
    0: {
      col1: [0, 1, 2, 3, 4, 5, 6],
      col2: [0, 6],
      col3: [0, 1, 2, 3, 4, 5, 6],
    },
    1: {
      col1: [],
      col2: [],
      col3: [0, 1, 2, 3, 4, 5, 6],
    },
    2: {
      col1: [0, 3, 4, 5, 6],
      col2: [0, 3, 6],
      col3: [0, 1, 2, 3, 6],
    },
    3: {
      col1: [0, 3, 6],
      col2: [0, 3, 6],
      col3: [0, 1, 2, 3, 4, 5, 6],
    },
    4: {
      col1: [0, 1, 2, 3],
      col2: [3],
      col3: [0, 1, 2, 3, 4, 5, 6],
    },
    5: {
      col1: [0, 1, 2, 3, 6],
      col2: [0, 3, 6],
      col3: [0, 3, 4, 5, 6],
    },
    6: {
      col1: [0, 1, 2, 3, 4, 5, 6],
      col2: [0, 3, 6],
      col3: [0, 3, 4, 5, 6],
    },
    7: {
      col1: [0],
      col2: [0],
      col3: [0, 1, 2, 3, 4, 5, 6],
    },
    8: {
      col1: [0, 1, 2, 3, 4, 5, 6],
      col2: [0, 3, 6],
      col3: [0, 1, 2, 3, 4, 5, 6],
    },
    9: {
      col1: [0, 1, 2, 3, 6],
      col2: [0, 3, 6],
      col3: [0, 1, 2, 3, 4, 5, 6],
    },
  }

  // :
  clock[2][8] = draw
  clock[4][8] = draw

  // Numbers
  time
    .replace(':', '')
    .split('')
    .forEach((num, i) => paintNumber(+num, i))

  return clock
}
*/
