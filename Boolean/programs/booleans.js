// isEven
function isEven(n) {
    return n % 2 === 0;
}

// check if a nunber is greater than or equal to 100 but less than 1000
function isThreeDigit(n) {
    return n >= 100 && n < 1000;
}

// check if two digit number is a repdigit
function repdigit(n) {
    let oDig = n % 10;
    let tDig = Math.floor(n/10);
    return oDig === tDig;
}