// Solución 2. Sólo cambio valores alrededor de *
// Aunque sigue siendo lenta
function revealSabotage(store) {
  store.forEach((line, r) => {
    line.forEach((_, c) => {
      if (store[r][c] === '*') {
        for (const x of [r - 1, r, r + 1]) {
          for (const y of [c - 1, c, c + 1]) {
            // Don't change the center
            if (x === r && y === c) continue

            // out of the margins or star
            if (!store?.[x]?.[y] || store[x][y] === '*') continue

            // New value
            store[x][y] = store[x][y] === ' ' ? '1' : String(+store[x][y] + 1)
          }
        }
      }
    })
  })

  return store
}

/* Solución 1
function revealSabotage(store) {
  function countSabotage(r, c) {
    if (store[r][c] === '*') return '*'

    const copy = []

    for (let i = r - 1; i < r + 2; i++) {
      let line = []
      for (let j = c - 1; j < c + 2; j++) {
        line.push(store?.[i]?.[j] ?? '')
      }
      copy.push(line)
    }

    return String(copy.flat().filter(c => (c === '*' ? 1 : 0)).length || ' ')
  }

  return store.map((line, row) =>
    line.map((_, column) => countSabotage(row, column)),
  )
}
*/
