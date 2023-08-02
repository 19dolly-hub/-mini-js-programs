// Function to add a message to the console-like section
function addToConsole(message) {
  const consoleDiv = document.getElementById("console");
  consoleDiv.innerHTML += message + "<br>";
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Function to find the average of an array
function findAvg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  addToConsole("Average: " + avg);
}

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
}

// Attach the form submission event listener
const form = document.getElementById("inputForm");
form.addEventListener("submit", handleSubmit);
