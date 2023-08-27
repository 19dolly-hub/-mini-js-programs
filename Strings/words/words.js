const inputField = document.getElementById("input");
const letterCount = document.getElementById("letter-count");
const wordCount = document.getElementById("word-count");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const abbr = document.getElementById("abbr");
const msg = document.getElementById("msg-alert");
const previewBox = document.getElementById("box");

inputField.addEventListener("input", (e) => {
    e.preventDefault();

    const input = inputField.value.trim();
    letterCount.innerText = input.length;

    const words = input.split(" ");
    wordCount.innerText = words.length;
    
    uppercase.innerText = input.toUpperCase();
    lowercase.innerText = input.toLowerCase();

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

    previewBox.innerText = input.substr(0, 30) + "...";
});