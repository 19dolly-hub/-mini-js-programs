function props(str) {
    let charNum = "Number of words: " + str.length + ',';
    let changeCase = str.toUpperCase() + str.toLowerCase() + ' etc';

    let result = charNum + changeCase;
    return result;
}

