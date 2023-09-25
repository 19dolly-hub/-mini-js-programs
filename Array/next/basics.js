function getLast(arr) {
    return arr[arr.length - 1];
}

function sort([a, b, c]) {
    let sortedArr = [];
    sortedArr[0] = Math.min(a, b, c);
    sortedArr[2] = Math.max(a, b, c);
    sortedArr[1] = a + b + c - ( sortedArr[0] + sortedArr[2]);
    return sortedArr;
}

// push and shift
function rotate(arr) {
    let firstElem = arr.shift();
    arr.push(firstElem);
    return arr;
}

function add(arr, elem) {
    if(arr.indexOf(elem) === -1) {
        arr.push(elem);
    }
    return arr;
}

// concat
function concatUp(a, b) {
    if(a.length > b.length) {
     return b.concat(a);
    }
    else {
     return a.concat(b);
    }
}

// slice
function halve(arr) {
    if (arr.length % 2 === 0) {
        return arr.slice(0, arr.length/2);
    }
    return arr.slice(0, (arr.length - 1)/2 + 1);
}


function list(words) {
    if(words.length === 0) {
        return "";
    }
    else if (words.length === 1) {
        return words[0];
    }

    let wordsExLast = words.slice(0, words.length-1);
    let lastWord = words[words.length-1];
    return wordsExLast.join(", ") + " and " + lastWord;
}

// 3 dimensional array:- array of arrays
function flat([ar1, ar2, ar3]) {
    let semiAr = ar1.concat(ar2);
    let finalAr = semiAr.concat(ar3);
    return finalAr;
}

// median
function median(arr) {
    let median = 0;
    if(arr.length % 2 === 0) {
        let mid1 = arr[(arr.length / 2) - 1];
        let mid2 = arr[arr.length / 2];
        median = (mid1 + mid2) / 2;
    }
    else {
        let middle = arr[(arr.length - 1) / 2];
        median = middle;
    }
    return median;
}
