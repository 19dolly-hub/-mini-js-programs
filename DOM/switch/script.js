const room = document.querySelector("body");
const btn = document.querySelector(".btnOff");
let tap = 0;


//---------------------------
// THE MAIN FUNCTION
//---------------------------


btn.addEventListener("click", () => {

  if (tap == 0) {
    btn.classList.add("btnOn");
    room.style.backgroundColor = "#dadada";
    tap = 1;
  }
  else {
    btn.classList.remove("btnOn");
    room.style.backgroundColor = "black";
    tap = 0;
  }
  
});


//----------------------------
//----------------------------