let copyBtn = document.querySelector("#copy-btn");
let input = document.querySelector("#input-elem");
let output = document.querySelector("#output-area");

function clickHandler() {
  output.innerText = input.value;
}

copyBtn.addEventListener("click", clickHandler);
