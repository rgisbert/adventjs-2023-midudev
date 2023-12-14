function checkIsValidCopy(original, copy) {
  // Sino tienen la misma longitud es una copia falsa
  // También evita problemas de acceso por índice inexistente
  if (original.length !== copy.length) return false;

  // Caracteres por los que se pueden sustituir EN ORDEN
  const validChar = '#+:. ';

  // Todas las posiciones deben ser válidas para que la carta pueda ser copia
  return [...original].every((letter, i) => {
    const toCompare = copy[i];

    // Si son iguales evito iteraciones
    // Además me sirve para asegurarme que las letras son la misma
    // (con expresiones regulares las abarco todas juntas)
    if (letter === toCompare) return true;

    if (letter.search(/[A-Z]/) === 0)
      return (
        letter === toCompare.toUpperCase() || toCompare.search(/[#+:. ]/) === 0
      );

    // No hace falta comprobar minúsculas porque en ese caso
    // 1. debería ser una letra igual (if del every)
    // 2. Si incluye un símbolo se compara a continuación
    //    misma comparación que si fuera un símbolo

    return validChar
      .substring(validChar.indexOf(letter) + 1) // En el peor de los casos abarca todos los símbolos
      .includes(toCompare); // Compara si el carácter enviado está en la lista de los aceptables
  });
}
