// Solución 1
function optimizeIntervals(intervals) {
  const sortedInterv = [...intervals].sort((a, b) => a[0] - b[0])
  const res = [sortedInterv.shift()]

  for (const [min, max] of sortedInterv) {
    const top = res.at(-1)[1]

    if (top < min) res.push([min, max])
    else res[res.length - 1][1] = Math.max(max, top)
  }

  return res
}

// Solución 2: con esta pretendía acortar cogiendo muchos elementos
// pero queda muy larga y la puntuación empeora
function optimizeIntervals(intervals) {
  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0])
  const result = [sortedIntervals.shift()]
  const cutInterval = () =>
    sortedIntervals.filter(([a]) => result.at(-1)[1] >= a).length

  while (sortedIntervals.length > 0) {
    const intervToCut = cutInterval()
    if (intervToCut) {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        Math.max(...sortedIntervals.splice(0, intervToCut).flat()),
      )
    } else {
      result.push(...sortedIntervals.splice(0, 1))
    }
  }

  return result
}
