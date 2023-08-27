function abbr(s1, s2) {
    let result = s1.charAt(0).trim() + s2.charAt(0).trim(); // if space is given before both the arguments
    return result;
}

let arr = [];
let input;
let p = input.split(" ");
let letterCount = input.length;
let wordCount = p.length;
let upper = input.toUpperCase;

function abbr(string) {
    let result = string.charAt(0).trim();
    arr.push(result);
}

p.forEach((str) => {
    abbr(str);
});

arr.join('').toUpperCase();

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