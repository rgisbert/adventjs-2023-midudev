// Segundo intento
function cyberReindeer(road, time) {
    let roadB = road.replace('S', '.')
    let prevRoad = road

    return Array(time)
        .fill()
        .map((_, i) => {
            const nextSanta = prevRoad.indexOf('S') + 1

            if (i === 5) roadB = roadB.replaceAll('|', '*')
            if (roadB[nextSanta] === '|' || i === 0) return prevRoad

            prevRoad =
                roadB.substring(0, nextSanta) +
                'S' +
                roadB.substring(nextSanta + 1)
            return prevRoad
        })
}

/* Primer intento
function cyberReindeer(road, time) {
    const res = [road]
    let santaPos = road.indexOf('S')

    for (let i = 1; i < time; i++) {
        const newWay = [...res.at(-1)]

        if (i >= 5 || road[santaPos + 1] === '.') {
            newWay[santaPos] = i === 1 ? '.' : road[santaPos]
            santaPos++
            newWay[santaPos] = 'S'
        }

        const step =
            i < 5 ? newWay.join('') : newWay.join('').replaceAll('|', '*')
        res.push(step)
    }

    return res
}
*/
