// Function to add a message to the console-like section
function addToConsole(message) {
  const consoleDiv = document.getElementById("console");
  consoleDiv.innerHTML += message + "<br>";
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}


// ------------------
// THE MAIN FUNCTION
//-------------------


// Function to find the average of an array
function findAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  addToConsole("Average: " + avg); // return avg;
}


// ------------------
// ------------------


// Function to execute the selected program with user-provided arguments
function runProgram(args) {
    addToConsole("Your Array: " + '[' + args + ']');
    findAvg(args);
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