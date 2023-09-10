const totalEl = document.getElementById("totalAmt");
const descField = document.getElementById("inputDesc");
const amtField = document.getElementById("inputAmt");
const addBtn = document.getElementById("addBtn");
const tableEl = document.getElementById("expenseTable");

let totalExp = 0;

addBtn.addEventListener('click',() => {
    const desc = descField.value.trim();
    const amt = parseInt(amtField.value, 10);
    const dt = new Date();
    const isNotEmpty = amt != "" && desc != "";

    if(isNotEmpty) {
        totalExp += amt;
        totalEl.innerText = totalExp;
        render(amt, desc, dt);
        descField.value = "";
        amtField.value = "";
    }
    else {
        alert("Please fill both the fields!");
    }
});

function render(amount, description, date) {
    const listItem = document.createElement("li");
    const dateElem = document.createElement("small");
    dateElem.textContent = ` ${addDate(date)}`;

    const listItemContent = document.createElement("div");
    listItemContent.classList.add("list-item");
    listItemContent.setAttribute("data-amount", `${amount}`);
    listItemContent.innerText = `${description} : ₹${amount}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("symbol", "remBtn");
    removeButton.addEventListener("click", function() {
        removeFn(this);
    });    
    listItemContent.appendChild(removeButton);

    listItem.appendChild(dateElem);
    listItem.appendChild(document.createElement("br"));
    listItem.appendChild(listItemContent);

    tableEl.prepend(listItem);
}

function addDate(theDate) {
    return theDate.toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'});
}

function removeFn(item) {
    const parentDiv = item.parentElement;
    const amtDel = parseInt(parentDiv.getAttribute("data-amount"), 10);

    totalExp -= amtDel;
    totalEl.innerText = totalExp;
    parentDiv.parentElement.remove();
}