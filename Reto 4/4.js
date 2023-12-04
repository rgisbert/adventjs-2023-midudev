function decode(message) {
    while (message.includes('(')) {
        const indexLastOpen = message.lastIndexOf('(') + 1
        const indexCloseParenthesis = message.indexOf(')', indexLastOpen)
        const res = message.substring(indexLastOpen, indexCloseParenthesis)

        message = message.replace(`(${res})`, [...res].reverse().join(''))
    }

    return message
}
