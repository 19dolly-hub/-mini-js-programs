var button = document.querySelector("button");
var heading = document.querySelector('h3');

function getInput() {
  if(button.textContent.includes("Not")) {
  button.innerText = "Clicked✅";

  var input = prompt("Write your name here...");
  alert("Hello " + input + " see the output printed below!");
  
  heading.innerText = "Hello! amazing " + input.toUpperCase();
  program.style.display = "block";
  }
}

button.addEventListener("click", getInput);
