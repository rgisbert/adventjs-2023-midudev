function compile(code) {
  let i = 0;
  let result = 0;

  const ops = {
    '+': () => result++,
    '-': () => result--,
    '*': () => (result *= 2),
    '<': () => {
      const part = code.slice(0, i);
      const prevPoint = part.lastIndexOf('%');

      if (prevPoint > -1) {
        result += compile(code.slice(prevPoint + 1, i));
      }
    },
    '¿': () => {
      const part = code.slice(i);
      const endIf = part.indexOf('?');

      if (result <= 0 && endIf > -1) {
        i += endIf;
      }
    },
  };

  while (i <= code.length) {
    ops?.[code[i]]?.();
    i++;
  }

  return result;
}
