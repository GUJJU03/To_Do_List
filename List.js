const addBtn = document.getElementById("btn");
addBtn.addEventListener("click", AddItems);

const inputBox = document.getElementById("input-box");

inputBox.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        AddItems();
    }
});

const ParentUi = document.getElementById("Parent");
ParentUi.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("btn-danger")) {
        RemoveItem(target.parentElement);
    } else if (target.classList.contains("btn-success")) {
        EditItem(target.parentElement);
    }
});

function AddItems() {
    let inputElement = document.getElementById("input-box");
    let itemName = inputElement.value.trim();

    if (itemName === "") {
        alert("Please add an item first.");
        return;
    }

    inputElement.value = "";

    if (ParentUi.children[0].classList.contains("default-message")) {
        ParentUi.children[0].remove();
    }

    let newItem = document.createElement("li");
    newItem.className = "list-group-item d-flex justify-content-between mt-2";
    newItem.innerHTML = `
        <h5 class="flex-grow-1">${itemName}</h5>
        <button class="btn btn-danger mr-2">Remove</button>
        <button class="btn btn-success">Edit</button>
    `;

    ParentUi.appendChild(newItem);
}

function RemoveItem(itemElement) {
    itemElement.remove();
    if (ParentUi.children.length === 0) {
        displayDefaultMessage("Nothing is here. Please add items!!");
    }
}

function EditItem(itemElement) {
    let itemNameElement = itemElement.querySelector("h5");
    let newItemName = prompt("Edit item name:", itemNameElement.textContent);
    if (newItemName !== null && newItemName.trim() !== "") {
        itemNameElement.textContent = newItemName;
    }
}

function displayDefaultMessage(message) {
    let defaultMsg = document.createElement("h4");
    defaultMsg.textContent = message;
    defaultMsg.classList.add("default-message");
    ParentUi.appendChild(defaultMsg);
}
