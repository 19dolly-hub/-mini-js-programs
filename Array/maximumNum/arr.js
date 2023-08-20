// Function to add a message to the console-like section
function addToConsole(message) {
    const consoleDiv = document.getElementById("console");
    consoleDiv.innerHTML += message + "<br>";
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
  }
  


//-------------------
// THE MAIN FUNCTION    
//-------------------


// Function to find maximum number from an array
function findMax(arr) {
    let maxNum = arr[0];
    for(let i = 1; i<arr.length; i++) {
        if(maxNum < arr[i]) {
            maxNum = arr[i];
        }
        else {
            maxNum = maxNum;
        }
    }
    addToConsole('Maximum number: ' + maxNum); // return maxNum;
}


//-------------------
//-------------------



// Function to execute the selected program with user-provided arguments
function runProgram(args) {
    addToConsole("Your Array: " + '[' + args + ']');
    findMax(args);
    addToConsole('------------------');
}

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault();
    const args = document.getElementById("args").value.split(",").map(Number);
    runProgram(args);
    document.getElementById("args").value = "";
}
  
// Attach the form submission event listener
const form = document.getElementById("inputForm");
form.addEventListener("submit", handleSubmit);
  
// Copy to clipboard
copy.addEventListener('click', (e) => {
    navigator.clipboard.writeText(copyText.textContent);
    e.target.innerText = 'Copied';
    e.target.style.color = '#dadada';
});