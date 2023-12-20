function distributeGifts(weights) {
    function calcNum(x, y) {
        const adjacentNums = [
            weights?.[x - 1]?.[y],
            weights?.[x]?.[y - 1],
            weights?.[x]?.[y],
            weights?.[x]?.[y + 1],
            weights?.[x + 1]?.[y],
        ].filter((n) => n)

        return Math.round(
            adjacentNums.reduce((total, n) => total + n) / adjacentNums.length,
        )
    }

    return weights.map((line, i) => line.map((_, j) => calcNum(i, j)))
}
