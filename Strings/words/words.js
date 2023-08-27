const inputField = document.getElementById("input");
const letterCount = document.getElementById("letter-count");
const wordCount = document.getElementById("word-count");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const abbr = document.getElementById("abbr");
const msg = document.getElementById("msg-alert");
const previewBox = document.getElementById("box");


//--------------------
// THE MAIN FUNCTION 
//--------------------



inputField.addEventListener("input", (e) => {
    e.preventDefault();

    // Property 1 : .length | Method 1: .trim()
    const input = inputField.value.trim();
    letterCount.innerText = input.length;

    const words = input.split(" ");
    wordCount.innerText = words.length;
    
    // Method 2: .toUpperCase() | Method 3: .toLowerCase()
    uppercase.innerText = input.toUpperCase();
    lowercase.innerText = input.toLowerCase();

    // Method 4: .charAt()
    const abbrArr = [];
    words.forEach((string) => {
        const firstLetter = string.charAt(0).trim();
        abbrArr.push(firstLetter);
    });
    abbr.innerText = abbrArr.join("").toUpperCase();

    if (input.length == 200) {
        msg.innerText = "You have reached the maximum limit!";
    }
    else {
        msg.innerText = "";
    }

    // Method 5: .substr() etc.
    previewBox.innerText = input.substr(0, 30) + "...";
});


//--------------------
//--------------------
