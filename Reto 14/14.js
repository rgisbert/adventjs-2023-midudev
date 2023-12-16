/**
 * ? Solución de la comunidad
 * ? no he podido solucionarlo por mi mismo y he recurrido a Discord
 * ? para buscar soluciones y entenderlas.
 * * Incluso mirando esta he tenido que pasar un rato estudiándola para entenderla
 * * También aplicarla con casos para ver bien cómo funcionaba
 */
function maxGifts(houses) {
  const sum = houses.slice(0, 2);

  for (const h of houses.slice(2)) {
    sum.push(Math.max(sum.at(-1), sum.at(-2) + h));
  }

  return sum.at(-1);
}

// 1er intento, el primer intento (que no guardé...) es el que más se parece a la solución
// de la comunidad. Utilizaba Max, pero algo no acababa de funcionar

/* 2º intento
 ? No pasa dos test secretos
function maxGifts(houses) {
  let i = 0;
  let sum = 0;

  while (i < houses.length) {
    const [first = 0, second = 0, third = 0] = houses.slice(i, i + 3);

    if (first >= second || second <= third) {
      sum += first;
      i += 2;
      continue;
    }

    sum += second;
    i += 3;
  }

  return sum;
}
*/

/* 3er intento:
 ! No funciona en un caso [4, 6, 5]
function maxGifts(houses) {
  let sum = 0;
  const filledIndexes = new Set();
  const sortedHouses = houses
    .map((h, i) => ({ index: i, value: h }))
    .sort((a, b) => b.value - a.value);

  sortedHouses.forEach(({ index, value }) => {
    if (!filledIndexes.has(index)) {
      sum += value;
      filledIndexes.add(index - 1);
      filledIndexes.add(index);
      filledIndexes.add(index + 1);
    }
  });

  return sum;
}
*/
