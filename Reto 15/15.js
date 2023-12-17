// Solución 3
// Con el optional chaining se gana mucho en complejidad
function autonomousDrive(store, movements) {
  const moves = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  }

  let posX = 0
  let posY = 0

  for (let i = 0; i < store.length; i++) {
    if (store[i].includes('!')) {
      posX = i
      posY = store[i].indexOf('!')
      break
    }
  }

  store[posX] = `${store[posX].slice(0, posY)}.${store[posX].slice(posY + 1)}`

  for (const move of movements) {
    const [moveX, moveY] = moves[move]

    const newX = posX + moveX
    const newY = posY + moveY

    if (store?.[newX]?.[newY] === '.') {
      posX = newX
      posY = newY
    }
  }

  store[posX] = `${store[posX].slice(0, posY)}!${store[posX].slice(posY + 1)}`
  return store
}

/* Solución 2
function autonomousDrive(store, movements) {
  const moves = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  }

  let posX = 0
  let posY = 0

  for (let i = 0; i < store.length; i++) {
    if (store[i].includes('!')) {
      posX = i
      posY = store[i].indexOf('!')
      break
    }
  }

  store[posX] = `${store[posX].slice(0, posY)}.${store[posX].slice(posY + 1)}`

  for (const move of movements) {
    const [moveX, moveY] = moves[move]

    const newRobotX = posX + moveX
    if (newRobotX < 0 || newRobotX >= store.length) continue

    const newRobotY = posY + moveY
    if (newRobotY < 0 || newRobotY >= store[0].length) continue

    if (store[newRobotX][newRobotY] === '.') {
      posX = newRobotX
      posY = newRobotY
    }
  }

  store[posX] = `${store[posX].slice(0, posY)}!${store[posX].slice(posY + 1)}`
  return store
}
*/

/* Solución 1. Mäs lenta
function autonomousDrive(store, movements) {
  const moves = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  }
  const searchPosition = (arr, charToSearch = '!') => {
    const long = arr[0].length
    const pos = arr.join('').indexOf(charToSearch)
    const x = Math.floor(pos / long)
    const y = pos - x * long

    return [x, y]
  }
  const changeChar = (arr, newChar, x, y) =>
    (arr[x] = `${arr[x].slice(0, y)}${newChar}${arr[x].slice(y + 1)}`)
  let robotPosition = searchPosition(store)

  changeChar(store, '.', ...robotPosition)

  for (const move of movements) {
    const [moveX, moveY] = moves[move]
    const [robotX, robotY] = robotPosition

    const newRobotX = robotX + moveX
    if (newRobotX < 0 || newRobotX >= store.length) continue

    const newRobotY = robotY + moveY
    if (newRobotY < 0 || newRobotY >= store[0].length) continue

    if (store[newRobotX][newRobotY] === '.') {
      robotPosition = [newRobotX, newRobotY]
    }
  }

  changeChar(store, '!', ...robotPosition)
  return store
}
*/
