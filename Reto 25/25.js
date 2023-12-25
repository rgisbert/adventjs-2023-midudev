function travelDistance(map) {
  const long = map.includes('\n') ? map.indexOf('\n') : map.length;
  map = map.replaceAll('\n', '');

  let startPos = map.indexOf('S');
  let result = 0;

  for (let i = 1; map.includes(i); i++) {
    const nextPos = map.indexOf(i);
    const height = Math.abs(
      Math.floor(startPos / long) - Math.floor(nextPos / long),
    );

    const width =
      startPos < nextPos
        ? Math.abs(startPos + long * height - nextPos)
        : Math.abs(nextPos + long * height - startPos);

    result += height + width;
    startPos = nextPos;
  }

  return result;
}
