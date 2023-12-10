// Solución más rápida y con mejor puntuación
function createChristmasTree(ornaments, height) {
    const res = [];
    const ornament = [...ornaments];

    const nextOrnament = () => {
        const next = ornament.shift();
        ornament.push(next);
        return next;
    };

    for (let i = 0; i < height; i++) {
        let line = '';

        for (let j = 0; j < i + 1; j++) {
            line += `${nextOrnament()} `;
        }

        res.push(`${' '.repeat(height - i - 1)}${line.trimEnd()}`);
    }

    res.push(`${' '.repeat(height - 1)}|`);
    return res.join('\n') + '\n';
}

/* Solución 1. Lenta y enrevesada
function createChristmasTree(ornaments, height) {
    function* nextOrnament(i) {
        const ornament = [...ornaments];

        while (i < ornament.length) {
            yield ornament[i];
            i = i < ornament.length - 1 ? i + 1 : 0;
        }
    }

    const iterator = nextOrnament(0);

    const top = Array(height)
        .fill()
        .map((_, i) => {
            return Array(i + 1)
                .fill()
                .map(() => iterator.next().value)
                .join(' ');
        })
        .map((l, i) => `${' '.repeat(height - i - 1)}${l}`);

    top.push(' '.repeat(height - 1) + '|');
    return top.join('\n') + '\n';
}
*/
