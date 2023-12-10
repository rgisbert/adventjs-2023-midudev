function cyberReindeer(road, time) {
    const timerOpen = 5;
    const way = road.replace('S', '.');
    let santa = road.indexOf('S') - 1;

    return [
        ...Array(time)
            .fill(way, 0, timerOpen)
            .fill(way.replaceAll('|', '*'), timerOpen)
            .map(r => {
                if (r[santa + 1] != '|') santa++;

                return `${r.substring(0, santa)}S${r.substring(santa + 1)}`;
            }),
    ];
}
