function props(str) {
    let charNum = "Number of words: " + str.length + ',';
    let changeCase = str.toUpperCase() + str.toLowerCase() + ' etc';

    let result = charNum + changeCase;
    return result;
}

function game(str) {
    if(input == str){
        return 'Right'
    }
    else if (input.toLowerCase() == str.toLowerCase) {
        return 'Right';
    }
    else {
        return 'Wrong!';
    }
}