window.addEventListener("load", solve);

function solve() {
    const placeElement = document.getElementById('place');
    const actionElement = document.getElementById('action');
    const personElement = document.getElementById('person');
    const addbtnElement = document.getElementById('add-btn'); 
    const taskListElement = document.getElementById('task-list');
    const doneListElement = document.getElementById('done-list');

    addbtnElement.addEventListener('click',() => {
        //Get input information
        const place = placeElement.value;
        const action = actionElement.value;
        const person = personElement.value;

        //Create task element
        const taskLiElement = createTaskElement(place,action,person);

        //Add to task list
        taskListElement.appendChild(taskLiElement);

        //Clear input fields
        clearInputs();
    })

    function createTaskElement(place,action,person) {
        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';

        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(doneButtonElement);

        const placePElement = document.createElement('p');
        placeElement.textContent = `Place:${place}`;

        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action:${action}`;

        const personPElement = document.createElement('p');
        personPElement.textContent = `Person:${person}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);

        const taskLiElement = document.createElement('li');
        taskLiElement.classList.add('clean-task');
        taskLiElement.appendChild(articleElement);
        taskLiElement.appendChild(buttonsDivElement);

        //Event listeners
        editButtonElement.addEventListener('click', () => {
            //send to inputs
            placeElement.value = place;
            actionElement.value = action;
            personElement.value = person;
            //remove from tasks
            taskLiElement.remove();
        })

        doneButtonElement.addEventListener('click', () => {
            //remove buttons
            buttonsDivElement.remove();

            //add delete button
            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';

            taskLiElement.appendChild(deleteButtonElement);

            //add to done list
            doneListElement.appendChild(taskLiElement);

            deleteButtonElement.addEventListener('click', () => {
                //delete task
                taskLiElement.remove();
            })
        })

        return taskLiElement;
    }
    function clearInputs() {
        placeElement.value = '';
        actionElement.value = '';
        personElement.value = '';
    }
}