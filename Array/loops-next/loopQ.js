// Sum of natural numbers upto n
function addUpTo(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

// Find factorial of a positive integer
function factorialOf(n) {
    let factorial = 1;
    for(let i=1; i<=n; i++) {
        factorial *= i;
    }
    return factorial;
}

// While loop
function nStars(n) {
    let star = "";
    while(star.length < n) {
        star += "*";
    }
    return star;
}

// LCM 
function findLcm(a, b) {
    let lcm = 1;
    for(let i=0; i<lcm; i++) {
        if(n%a === 0 && n%b === 0) {
            return n;
        }
        n++;
    }
    return n;
}

// LCM Using do while
function lcm(a, b) {
    let n = 0;
    do {
        n++;
    }
    while (!(n%a === 0 && n%b === 0)) // or while (n%a !== 0 || n%b !== 0)
    return n;
}

// GCD / HCF
function findHcf(a, b) {
    let hcf = 0;
    for(let i=1; i<=a && i<=b; i++) {
        if(a%i === 0 && b%i === 0) {
            if(hcf < i) {
                hcf = i;
            }
        }
    }
    return hcf;
} // using do while ?

// break
function isPrime(n) {
    let prime = true;
    if(n === 1) {
        prime = false;
    }
    else {
        for(let i=2; i<n; i++) {
            if(n%i === 0) {
                prime = false;
                break;
            }
        }
    }
    return prime;
}

// nested loop
function somOf(threeDArr) {
    let sum = 0;
    for(let i=0; i<threeDArr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

// Object of arguments
function max() {
    let maxNum = arguments[0];
    for(let i=1; i<arguments.length; i++) {
        if(maxNum < arguments[i]) {
            maxNum = arguments[i];
        }
        else {
            return maxNum;
        }
    }
    return maxNum
}

// Check for NaN / Modified and advanced parseInt
function parseN(string) {
    let box = string;
    for(let i=0; i<string.length; i++) {
        let num = parseInt(box);
        if(!Number.isNaN(num)) {
            return num;
        }
        else {
            box = box.substr(1);
        }
    }
    return NaN;
}

// Reverse using recursion
function reverse(string) {
    let box = string;
    let reversed = "";
    for(let i=0; i<box.length; i++) {
        let lastChar = box.charAt(box.length - 1);
        reversed += lastChar;
        box = box.substr(0, box.length - 1);
        reverse(box);
    }
    return reversed;
}