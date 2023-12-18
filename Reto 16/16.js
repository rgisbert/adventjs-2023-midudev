// Ejercicio resuelto gracias a la ayuda de la comunidad
function transformTree(tree) {
  const createTree = (original, i = 0) => {
    let branch = null

    if (i < original.length && original[i] != null) {
      branch = {
        value: original[i],
        left: createTree(original, 2 * i + 1),
        right: createTree(original, 2 * i + 2),
      }
    }

    return branch
  }

  const res = createTree(tree)
  return res
}
