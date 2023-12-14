// Solución 2: mejora tiempos
function calculateTime(deliveries) {
  let timeLeft = 7 * 3600;
  const cast = n => String(n).padStart(2, '0');

  deliveries.forEach(dev => {
    const [h, m, s] = dev.split(':');
    timeLeft -= +h * 3600 + +m * 60 + +s;
  });

  const sign = timeLeft > 0 ? '-' : '';
  timeLeft = Math.abs(timeLeft);
  const hrs = Math.floor(timeLeft / 3600);
  const mins = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft - (hrs * 3600 + mins * 60);

  return `${sign}${cast(hrs)}:${cast(mins)}:${cast(secs)}`;
}

// Solución 1: baja puntuación
function calculateTime(deliveries) {
  const timeLimit = 7 * 3600;
  const delivSecs = deliveries.reduce((acc, deliv) => {
    const [h, m, s] = deliv.split(':');
    return acc + (Number(h) * 3600 + Number(m) * 60 + Number(s));
  }, 0);
  const dif = Math.abs(timeLimit - delivSecs);

  const hours = Math.floor(dif / 3600);
  const mins = Math.floor((dif - 3600 * hours) / 60);
  const secs = dif - (3600 * hours + 60 * mins);

  let res = timeLimit > delivSecs ? '-' : '';
  res += String(hours).padStart(2, '0') + ':';
  res += String(mins).padStart(2, '0') + ':';
  res += String(secs).padStart(2, '0');

  return res;
}
