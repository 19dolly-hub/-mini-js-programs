// Math .pow/sqrt, .floor, .ceil, .round, .min/max, .PI/E, .random, .parseInt/Number

function round100(n) {
  let nn = n / 100;
  let nnr = Math.round(nn);
  let nr = nnr * 100;
  return nr;
}

function dice() {
  let rn = Math.random() * 5;
  rn++;
  let num = Math.round(rn);
  return num;
}

function add(str) {
  let a = parseInt(str, 10);
  let bInd = str.indexOf("+");
  let bStr = str.substr(bInd);
  let b = parseInt(bStr, 10);
  return a + b;
}
