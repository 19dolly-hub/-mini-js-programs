const button = document.querySelector("button");
const heading = document.querySelector('h3');
const copyText = document.querySelector('#program pre').innerText;


//-------------------
// THE MAIN FUNCTION    
//-------------------


// function to get the input and print on screen
function getInput() {
  if(button.textContent.includes("Not")) {
  button.innerText = "Clicked✅";

  const input = prompt("Write your name here...");
  alert("Hello " + input + " see the output printed below!");
  
  heading.innerText = "Hello! amazing " + input.toUpperCase();
  program.style.display = "block";
  }
}

button.addEventListener("click", getInput);


//-------------------
//-------------------


// copy to clipboard
copyBtn.addEventListener('click', (e) => {
  navigator.clipboard.writeText(copyText);
  e.target.innerText = "Copied";
  e.target.style.color = "gray";
});