// Esta solución mejora los tiempos
function organizeGifts(gifts) {
    let lastIndex = 0

    return gifts
        .match(/[a-z]/gi)
        .map(letter => {
            const qty = gifts.slice(lastIndex, gifts.indexOf(letter))
            lastIndex = gifts.indexOf(letter) + 1

            const palidece = Math.floor(qty / 50)
            const box = Math.floor((qty - palidece * 50) / 10)
            const bag = Math.floor(qty - (palidece * 50 + box * 10))

            return (
                (palidece > 0 ? `[${letter}]`.repeat(palidece) : '') +
                (box > 0 ? `{${letter}}`.repeat(box) : '') +
                (bag > 0 ? `(${letter.repeat(bag)})` : '')
            )
        })
        .join('')
}

/*
? Solución más lenta
function organizeGifts(gifts) {
    const giftsPrepared = []
    let res = ''
    let nums = ''

    ;[...gifts].forEach(letter => {
        if (!isNaN(letter)) {
            nums += letter
        } else {
            giftsPrepared.push({
                [letter]: +nums,
            })
            nums = ''
        }
    })

    for (const gift of giftsPrepared) {
        for (const [letter, qty] of Object.entries(gift)) {
            const palidece = Math.floor(qty / 50)
            const box = Math.floor((qty - palidece * 50) / 10)
            const bag = Math.floor(qty - (palidece * 50 + box * 10))

            res +=
                (palidece > 0 ? `[${letter}]`.repeat(palidece) : '') +
                (box > 0 ? `{${letter}}`.repeat(box) : '') +
                (bag > 0 ? `(${letter.repeat(bag)})` : '')
        }
    }

    return res
}
*/
