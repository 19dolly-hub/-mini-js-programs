const button = document.querySelector("button");
const heading = document.querySelector('h3');
const copyText = document.querySelector('#program pre').innerText;

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
copyBtn.addEventListener('click', () => {
  console.log(copyText);
  navigator.clipboard.writeText(copyText);
});