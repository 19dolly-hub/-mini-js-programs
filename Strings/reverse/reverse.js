// print area
function print(out) {
    const div = document.getElementById('print-area');
    div.innerHTML += out + "<br>";
}


//-------------------
// THE MAIN FUNCTION    
//-------------------


// function to reverse the string
function reverseIt(str) {
    let strArr = str.split('');
    let reversedArr = strArr.reverse();
    let reversedStr = reversedArr.join('');

    print("Reversed String: " + reversedStr); // return reversedStr;
}


//-------------------
//-------------------


// run program
function run(string) {
    print("Your String: " + string);
    reverseIt(string);
    print('');
}

// input form submit
function submitBtn(e) {
    e.preventDefault();
    const string = document.getElementById('string').value;
    run(string);
}

const inputForm = document.getElementById('input-form');
inputForm.addEventListener('submit', submitBtn);