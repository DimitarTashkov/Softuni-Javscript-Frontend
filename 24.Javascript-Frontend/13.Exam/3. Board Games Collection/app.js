const baseUrl = 'http://localhost:3030/jsonstore/games/';

//buttons
const loadGamesButtonElement = document.getElementById('load-games');
const addGameButtonElement = document.getElementById('add-game');
const editGameButtonElement = document.getElementById('edit-game');
const deleteButtonElement = '';

//inputs
const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const maxPlayersInputElement = document.getElementById('players');

//containers
const gamesContainerElement = document.getElementById('games-list');

//uti
let currentGame = null;

async function loadGames() {
    gamesContainerElement.innerHTML = '';

    const response = await fetch(baseUrl);
    const data = await response.json();

    const gamesListFragment = document.createDocumentFragment();

    Object.values(data).forEach(game => {
        gamesListFragment.appendChild(createGameElement(game));
    })
    gamesContainerElement.appendChild(gamesListFragment);
    editGameButtonElement.setAttribute('disabled' ,'disabled');
}

loadGamesButtonElement.addEventListener('click', loadGames)

addGameButtonElement.addEventListener('click', () => {
    //get game
    const game = getGameObject();
    //send post request to server
     fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(game)
    })
        .then(response => {
            if(!response.ok) {
                return;
            }
                //fetch all games
                loadGames();
                //clear inputs
                clearInputs();
        })

})
//edit game event listener
editGameButtonElement.addEventListener('click', async () => {   
    //make put request
    await fetch(`${baseUrl}/${currentGame}`, {
        method: 'PUT',
        headers: {
            'Content-Type:': 'application-json',
        },
        body: JSON.stringify({
            _id:currentGame
            ,name: nameInputElement.value
            ,type: typeInputElement.value
            ,players: maxPlayersInputElement.value
        })
    })
    //clear input fields
    clearInputs();

    //fetch all data
    loadGames();

    //deactivate edit button
    editGameButtonElement.setAttribute('disabled', 'disabled');

    //activate add button
    addGameButtonElement.removeAttribute('disabled');
})

function createGameElement(game) {

    //Destructre game object
    const {_id,name, type, players} = game;

    //begin html architecture

    //buttons 
    const changeGameButtonElement = document.createElement('button');
    changeGameButtonElement.classList.add('change-btn');
    changeGameButtonElement.textContent = 'Change';

    const deleteGameButtonElement = document.createElement('button');
    deleteGameButtonElement.classList.add('delete-btn');
    deleteGameButtonElement.textContent = 'Delete';

    //buttons container
    const buttonsContainerElement = document.createElement('div');
    buttonsContainerElement.classList.add('buttons-container')
    buttonsContainerElement.appendChild(changeGameButtonElement);
    buttonsContainerElement.appendChild(deleteGameButtonElement);

    //paragpraphs with their data
    const gameNamePElement = document.createElement('p');
    gameNamePElement.textContent = name;

    const gameplayersPElement = document.createElement('p');
    gameplayersPElement.textContent = players;

    const gametypePElement = document.createElement('p');
    gametypePElement.textContent = type;

    //content container
    const contentContainerElement = document.createElement('div');
    contentContainerElement.classList.add('content');

    //append all paragraphs in it
    contentContainerElement.appendChild(gameNamePElement);
    contentContainerElement.appendChild(gameplayersPElement);
    contentContainerElement.appendChild(gametypePElement);
    
    //board game container
    const boardGameElement = document.createElement('div');
    boardGameElement.classList.add('board-game');
    boardGameElement.appendChild(contentContainerElement);
    boardGameElement.appendChild(buttonsContainerElement);
    

    //add event listeners
    changeGameButtonElement.addEventListener('click', () => {
        //populate input fields with information
        nameInputElement.value = gameNamePElement.textContent;
        maxPlayersInputElement.value = gameplayersPElement.textContent;
        typeInputElement.value = gametypePElement.textContent;

        currentGame = _id;

        //edit game button activation
            editGameButtonElement.removeAttribute('disabled');

        //add button deactivation
        addGameButtonElement.setAttribute('disabled', 'disabled')
        //remove from games container
        boardGameElement.remove();
    })
    

    deleteGameButtonElement.addEventListener('click', () => {
        //delete game
         fetch(`${baseUrl}/${game._id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if(!response.ok) {
                return;
            }
                    //get all games
                loadGames();
        })

    })

    //return board game
    return boardGameElement;

}
//Inputs functions
function getGameObject() {
    return {
        name: nameInputElement.value
        ,type: typeInputElement.value
        ,players: maxPlayersInputElement.value
    }
}
function clearInputs() {
    nameInputElement.value = '';
    typeInputElement.value = '';
    maxPlayersInputElement.value = '';
}