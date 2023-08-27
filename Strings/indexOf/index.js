function secondIndexOf(s1, s2) {
    let firstIndex = s1.indexOf(s2);
    let secondIndex = s1.indexOf(s2, firstIndex + 1);
    return secondIndex;
}

function normalize(str) {
    let norm = str.replace('-', '/');
    let newNorm = norm.replace('-', '/');

    return newNorm;
}