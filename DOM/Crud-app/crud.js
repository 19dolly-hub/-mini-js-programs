let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addItem);

let xBtn = document.getElementById("x-btn");
let parentUl = document.querySelector("ul");

function addItem(e) {
  let currentElem = e.target;
  let inputElem = currentElem.previousElementSibling;
  if (parentUl.children[0].className == "remove-msg" && inputElem.value.trim() != "") {
    parentUl.children[0].remove();
  }
  if (inputElem.value.trim() != "") {
    let newItem = document.createElement("li");
    let newItemText = inputElem.value;
    newItem.className = "item";
    newItem.innerHTML = `<p>${newItemText}</p>
        <button id="edit-btn" onclick="editItem(this)">Edit</button>
        <button id="x-btn" onclick="removeItem(this)">Delete</button>`;
    parentUl.appendChild(newItem);
    inputElem.value = "";
  }
}

function removeItem(removeBtn) {
  let xElem = removeBtn.parentElement;
  xElem.remove();
  console.log(xElem, "has been removed!"); // shows the list of removed items in console

  if (parentUl.children.length <= 0) {
    let msg = document.createElement("div");
    msg.className = "remove-msg";
    msg.innerHTML = `<h3 class="msg">Your list is Empty! Please add items...</h3>`;
    parentUl.appendChild(msg);
  }
}

function editItem(editBtn) {
  if (editBtn.textContent == "Edit") {
    editBtn.textContent = "Done";

    let editor = document.createElement("span");
    editor.innerHTML = `<input type="text" placeholder="edit-item" id="edit" required>`;
    let parentLi = editBtn.parentElement;
    parentLi.insertBefore(editor, editBtn);
  } else if (editBtn.textContent == "Done") {
    editBtn.textContent = "Edit";

    let editor = editBtn.previousElementSibling;
    let newItemName = editor.children[0].value;

    if (newItemName.trim() != "") {
      editBtn.parentElement.children[0].textContent = newItemName;
      console.log(
        editBtn.parentElement.children[0].textContent + " is now",
        newItemName
      ); // saving history of privious names in console
      editBtn.parentElement.children[1].remove();
    }
    else if(newItemName.trim() == "") {
      editBtn.previousElementSibling.remove();
    }
  }
}
