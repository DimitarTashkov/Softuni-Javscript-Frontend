function addItem() {
    //DOM elements

    const inputElement = document.getElementById('newItemText');
    const itemListElement = document.getElementById('items');

    //Create new item
    const newitemElement = document.createElement('li');

    //Add text content
    newitemElement.textContent = inputElement.value;

    //Append child to the list
    itemListElement.appendChild(newitemElement);

    //Clear input text
    inputElement.value = '';
}