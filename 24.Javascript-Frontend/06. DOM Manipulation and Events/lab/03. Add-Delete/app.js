function addItem() {
    const inputItemElement = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');

    //Create new item element
    const newInputItemElement = document.createElement('li');
    newInputItemElement.textContent = inputItemElement.value;

    //Create link element
    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    //Add event listener
    deleteLinkElement.addEventListener('click', () => {
        newInputItemElement.remove();
    })

    //Append like element to new element

    newInputItemElement.appendChild(deleteLinkElement);

    //Append new item element to list
    itemsListElement.appendChild(newInputItemElement);

    inputItemElement.value = '';

}