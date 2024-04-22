window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');

    const nameInputElement = document.getElementById('name');
    const numberInputElement = document.getElementById('phone');
    const categoryInputElement = document.getElementById('category');

    const checkListElement = document.getElementById('check-list');
    const contactListElement = document.getElementById('contact-list');

    const categories = {
        'work': 1
        ,'family': 2
        , 'friends': 3
    }

    addButtonElement.addEventListener('click', () => {
      //read input values
      const name = nameInputElement.value;
      const number = numberInputElement.value;
      const category = categoryInputElement.value;

    //check for non empty inputs
    if(!name || !number || !category) {
        return;
    }

      //buttons html structure
      const saveButtonElement = document.createElement('button');
      saveButtonElement.classList.add('save-btn');

      const editButtonElement = document.createElement('button');
      editButtonElement.classList.add('edit-btn');

      //buttons container
      const buttonsDivElement = document.createElement('div');
      buttonsDivElement.classList.add('buttons');
      buttonsDivElement.appendChild(editButtonElement);
      buttonsDivElement.appendChild(saveButtonElement);

      //article html structure
      const categoryPElement = document.createElement('p');
      categoryPElement.textContent = `category:${category}`;

      const phonePElement = document.createElement('p');
      phonePElement.textContent = `phone:${number}`;

      const namePElement = document.createElement('p');
      namePElement.textContent = `name:${name}`;

      //article element
      const articleElement = document.createElement('article');
      articleElement.appendChild(namePElement);
      articleElement.appendChild(phonePElement);
      articleElement.appendChild(categoryPElement);

      //li element
      const liElement = document.createElement('li');
      liElement.appendChild(articleElement);
      liElement.appendChild(buttonsDivElement);

      //append it to ul

      checkListElement.appendChild(liElement);
      //clear inputs
      clearInputs();

      //add buttons event listeners

      //edit button event listener
      editButtonElement.addEventListener('click', () => {
        //extract information from checkList to form
        nameInputElement.value = name;
        numberInputElement.value = number;
        categoryInputElement.selectedIndex = categories[category];

        //delete li record from ul
        liElement.remove();
       
    })
      //save button event listener
      saveButtonElement.addEventListener('click', () => {
        //append li element to contacts list
        contactListElement.appendChild(liElement);

        //remove all buttons
        buttonsDivElement.remove();

        //add delete button to li Element
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('del-btn');
        liElement.appendChild(deleteButtonElement);

        //add delete button event listener and we are done
        deleteButtonElement.addEventListener('click', () => {
            //remove li element
            liElement.remove();
        })
      })
    })
    function clearInputs() {
    nameInputElement.value = '';
    numberInputElement.value = '';
    categoryInputElement.value = '';

    }
  }
  