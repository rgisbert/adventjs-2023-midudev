// * Esta solución puntúa mejor que la otra
function drawGift(size, symbol) {
    const top = Array(size)
        .fill()
        .map((_, i) => {
            const face =
                i === 0 || i === size - 1
                    ? '#'.repeat(size)
                    : `#${symbol.repeat(size - 2)}#`
            const side = i > 0 ? `${symbol}`.repeat(i - 1) + '#'.repeat(1) : ''

            return (face + side).padStart(size * 2 - 1)
        })

    const bottom = top
        .slice(0, size - 1)
        .reverse()
        .map(r => r.trimLeft())

    return [top, bottom].flat().join('\n') + '\n'
}

/*
? 1º Solución, más lenta que la otra
function drawGift(size, symbol) {
    const long = size * 2 - 1
    const res = Array(long)

    for (let i = 0; i < size; i++) {
        const face = Array(size).fill('#')
        const faceFinal =
            i === 0 || i === size - 1 ? face : face.fill(symbol, 1, size - 1)
        const side = Array(i).fill(symbol)

        const line = [...faceFinal, ...side.fill('#', i - 1)].join('')

        res[i] = line.padStart(long)
        res[long - i - 1] = line
    }

    return res.join('\n') + '\n'
}
*/
