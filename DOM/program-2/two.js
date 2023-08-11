const copyBtn = document.querySelector("#copy-btn");
const input = document.querySelector("#input-elem");
const output = document.querySelector("#output-area");


//-------------------
// THE MAIN FUNCTION    
//-------------------


// function to get the input from input box and copy in output area
function clickHandler() {
  output.innerText = input.value;
}

copyBtn.addEventListener("click", clickHandler);


//-------------------
//-------------------


// copy to clipboard
const copyText = document.querySelector('#program pre').innerText;
copy.addEventListener('click', (e) => {
  navigator.clipboard.writeText(copyText);
  e.target.innerText = 'Copied';
  e.target.style.color = 'gray';
})
