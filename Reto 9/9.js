function adjustLights(lights) {
    let serial = ['🟢', '🔴']
    const greenLight = lights.filter(
        (light, i) => light !== serial[+(i % 2)],
    ).length

    serial = serial.reverse()
    const redLight = lights.filter(
        (light, i) => light !== serial[+(i % 2)],
    ).length

    return [greenLight, redLight].sort()[0]
}
