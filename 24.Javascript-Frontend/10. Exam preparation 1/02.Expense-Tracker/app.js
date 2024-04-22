
window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const deleteButtonElement = document.querySelector('.btn.delete');

    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const expenseListElement = document.getElementById('expense-list');

    const expense = expenseInputElement.value;
    const amount = amountInputElement.value;
    const date = dateInputElement.value;
    
    addButtonElement.addEventListener('click', () => {
        //Get input information

        //Check if empty element
        if(!expense || !amount || !date) {
            return;
        }

        //Add to preview list
        const expenseLiElement = createArticleElement(expense,amount,date);
        previewListElement.appendChild(expenseLiElement);

        //Disable add button
        addButtonElement.setAttribute('disabled', 'disabled');

        //Clear inputs
        const expenseInputElement =  '';
        const amountInputElement = '';
        const dateInputElement = '';

        //Get buttons elements
        const editButtonElement = expenseLiElement.querySelector('.btn.edit');  
        const okButtonElement = expenseLiElement.querySelector('.btn.ok');  

        //Attach edit button event listener
        editButtonElement.addEventListener('click', () => {
            //Extract date from preview
            const pElementsNodeList = expenseLiElement.querySelectorAll('article p') 
            const pElements = Array.from(pElementsNodeList);

            //Send data to inputs
            expenseInputElement.value = expense;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            //Clear preview
            expenseLiElement.remove();

            //Enable add button
            addButtonElement.removeAttribute('disabled');
        })

        //Attach ok button event listener
        okButtonElement.addEventListener('click', () => {
            //Remove buttons from expense item
            const expenseButtonsElements = expenseLiElement.querySelector('.buttons');
            expenseButtonsElements.remove();

            //Move expense item to expense list
            expenseListElement.appendChild(expenseLiElement);

            //Enable add button
            addButtonElement.removeAttribute('disabled');
        })

    })

    deleteButtonElement.addEventListener('click', () => {
         expenseListElement.innerHTML = '';
    })
    function createArticleElement(expense, amount, date) {
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;

        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');

        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';

        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';

        const buttonsDivElement = document.createElement('div');

        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(okButtonElement);

        const liExpenseElement = document.createElement('li');
        liExpenseElement.classList.add('expense-item');
        liExpenseElement.appendChild(articleElement);
        liExpenseElement.appendChild(buttonsDivElement);

        return liExpenseElement;


    }
}