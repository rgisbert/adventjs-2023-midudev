// Solución 2. Al incorporar every, mejora la resolución
function getIndexsForPalindrome(word) {
    if (word == [...word].reverse().join('')) return [];

    for (let i = 0; i < word.length - 1; i++) {
        for (let j = i + 1; j < word.length; j++) {
            const newWord = [...word];
            newWord[i] = word[j];
            newWord[j] = word[i];
            const aux = [...newWord];

            if (newWord.reverse().every((l, n) => l === aux[n])) return [i, j];
        }
    }

    return null;
}

/* Solución 1
function getIndexsForPalindrome(word) {
    if (word === [...word].reverse().join('')) return [];

    for (let i = 0; i < word.length - 1; i++) {
        for (let j = i + 1; j < word.length; j++) {
            const newWord = [...word];
            newWord[i] = word[j];
            newWord[j] = word[i];

            if (newWord.join('') === [...newWord].reverse().join(''))
                return [i, j];
        }
    }

    return null;
}
*/
