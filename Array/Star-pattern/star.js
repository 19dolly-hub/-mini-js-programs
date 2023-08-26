function print() {
    let star = "";
    for(let i=0; i<5; i++) {
        star += '*';
        console.log(star);
    }
}
print();

function reverse() {
    let line = '*****';
    let arr = line.split('');
    for(let i=0; i<5; i++) {
        console.log(arr.join(''));
        arr.pop();
    }
}
reverse();