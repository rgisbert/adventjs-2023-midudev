// Solución aplicada de Discord
// ! Sigo teniendo problemas para solucionar recursividad y sin el Discord no habría entendido cómo hacerlo
function getStaircasePaths(steps, maxJump) {
  const result = [];
  const path = [];

  const calculatePaths = (steps, maxJump, path) => {
    if (steps === 0) {
      result.push(path);
      return;
    }

    for (let i = 1; i <= steps && i <= maxJump; i++) {
      calculatePaths(steps - i, maxJump, [...path, i]);
    }
  };

  calculatePaths(steps, maxJump, path);

  return result;
}

/* Solución errónea
 ? Intento resolverlo pero sólo me funciona para unos pocos casos
function getStaircasePaths(steps, maxJump) {
  const res = [];

  if (maxJump === 1) return Array(steps).fill(1);
  if (steps % maxJump === 0) {
    const div = steps / maxJump;
    res.push(Array(div).fill(div));
  }

  for (let i = 0; i <= steps - maxJump; i++) {
    const base = [...Array(steps - maxJump + 1).fill(1)];
    base[base.length - 1 - i] = maxJump;
    res.push(base);
  }

  res.push(getStaircasePaths(steps, maxJump - 1));

  return res.sort();
}
*/
