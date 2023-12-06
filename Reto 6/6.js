function maxDistance(movements) {
    const moves = [...movements]
    const right = moves.filter(m => m === '>').length
    const left = moves.filter(m => m === '<').length
    const star = moves.length - (right + left)
    return Math.abs(right - left) + star
}
