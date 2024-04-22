window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const deleteButtonElement = document.querySelector('.btn.clear')

    const playerElement = document.getElementById('player');
    const roundElement = document.getElementById('round');
    const scoreInputElement = document.getElementById('score');
    const sureListElement = document.getElementById('sure-list');
    const scoreboardListElement = document.getElementById('scoreboard-list');

 

    addButtonElement.addEventListener('click', () => {        
        const player = playerElement.value;
        const score = scoreInputElement.value;
        const round = roundElement.value;
        if(!player || !score || !round) {
            return;
        }

        //create html architecture
        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn','ok');
        okButtonElement.textContent = 'ok';

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn','edit');
        editButtonElement.textContent = 'edit';

        const playerNameElement = document.createElement('p');
        playerNameElement.textContent = player;

        const scoreElement = document.createElement('p');
        scoreElement.textContent = `Score: ${score}`;

        const roundNameElement = document.createElement('p');
        roundNameElement.textContent = `Round: ${round}`;
        //append to article container
        const articleContainerElement = document.createElement('article');
        articleContainerElement.appendChild(playerNameElement);
        articleContainerElement.appendChild(scoreElement);
        articleContainerElement.appendChild(roundNameElement);

        //append to li element

        const liElement = document.createElement('li');
        liElement.classList.add('dart-item');
        liElement.appendChild(articleContainerElement);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(okButtonElement);

        //append to ul
        sureListElement.appendChild(liElement);
        //clear inputs
        clearInputs();

        //disable add button
        addButtonElement.setAttribute('disabled','disabled');

        //edit button event listener
        editButtonElement.addEventListener('click', () => {
           // retrieve input data
            playerElement.value = player;
            scoreInputElement.value = score;
            roundElement.value = round;

            //delete li element from ul
            liElement.remove();
            //enable add button
            addButtonElement.removeAttribute('disabled');
        })
        //ok button event listener
        okButtonElement.addEventListener('click', () => {
            //append ul element to scoreboard list
            scoreboardListElement.appendChild(sureListElement);

            //remove edit and ok buttons
            editButtonElement.remove();
            okButtonElement.remove();

            //reactivate add button
            addButtonElement.removeAttribute('disabled');
        })

        //delete button event listener
        deleteButtonElement.addEventListener('click', () => {
            location.reload();
        })
    })
    function clearInputs() {
        playerElement.value = '';
        scoreInputElement.value = '';
        roundElement.value = '';
    }
}


  