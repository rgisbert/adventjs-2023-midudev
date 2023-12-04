function findNaughtyStep(original, modified) {
    // Si es igual acabamos sin hacer nada más
    if (original === modified) return ''

    // La pongo aquí para poder utilizarla fuera del bucle
    let i = 0
    while (i < original.length) {
        if (original[i] !== modified[i]) {
            // Analiza qué sección es más larga para saber si falta o sobra una
            return original.length <= modified.length
                ? modified[i]
                : original[i]
        }
        i++
    }

    // En caso de que sea la última de modified la que falta, la devuelve
    return modified[i]
}
