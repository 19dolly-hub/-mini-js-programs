function props(str) {
    let charNum = "Number of words: " + str.length + ',';
    let changeCase = str.toUpperCase() + str.toLowerCase() + ' etc';

    let result = charNum + changeCase;
    return result;
}

function firstWord(str) {
    let words = str.trim();
    let space = words.indexOf(' ');
    
    let result = words.substr(0, space);
    return result;
}

function normalize(str) {
    let norm = str.replace('-', '/');
    let newNorm = norm.replace('-', '/');

    return newNorm;
}