// &&, ||, !

// NAND
function nand(bool1, bool2) {
    let and = bool1 && bool2;
    let nand = !and;
    return nand;
}

// NOR
function nor(bool1, bool2) {
    let or = bool1 || bool2;
    let nor = !or;
    return nor;
}

// XOR
function xor(a, b) {
    let xor = (a && !b) || (!a && b);
    return xor;
}

// STRICT EQUALITY
function equals(v1, v2, v3) {
    return v1 === v2 && v1 === v3;
}

// STRICT INEQUALITY
function unequal(v1, v2, v3) {
    return v1 !== v2 && v1 !== v3 && v2 !== v3;
}