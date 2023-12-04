/*
* Esta solución funciona, pero el IDE no reconoce isSubsetOf
function manufacture(gifts, materials) {
    const materialsSet = new Set(materials)

    const result = gifts.filter(gift => new Set(gift).isSubsetOf(materialsSet))

    return result
}
*/

function manufacture(gifts, materials) {
    const result = gifts.filter(gift =>
        [...gift].every(g => [...materials].includes(g)),
    )

    return result
}
