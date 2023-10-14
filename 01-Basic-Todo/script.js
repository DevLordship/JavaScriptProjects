// select all items
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");
console.log(form);
console.log(list);
console.log(input);
// whenever i submit the form add a new item
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // create a new item
    const item = document.createElement("div");
    item.innerText = input.value;
    item.classList.add("list-items");

    // add the item to the list

    list.appendChild(item);
    //clear the input
    input.value = "";
    //set event listener to delete item when clicked
    item.addEventListener("click", () => {
        // list.removeChild(item);
        item.remove();
    });
});
