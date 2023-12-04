function findFirstRepeated(gifts) {
    const unique_gifts = new Set()

    for (const gift of gifts) {
        if (unique_gifts.has(gift)) return gift

        unique_gifts.add(gift)
    }

    return -1
}
