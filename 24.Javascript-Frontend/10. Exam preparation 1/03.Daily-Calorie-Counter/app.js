const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadButtonElement = document.getElementById('load-meals');
const addButtonElement = document.getElementById('add-meal');
const editButtonElement = document.getElementById('edit-meal');
const mealListElement = document.getElementById('list');
const foodInputElement = document.getElementById('food')
const timeInputElement = document.getElementById('time')
const caloriesInputElement = document.getElementById('calories')

let currentMeal = null;

const loadMeals = () => async() => {
    //Fetch all meals
    const response = await fetch(baseUrl);
    const data = await response.json();
    mealListElement.innerHTML = '';
    //Create meal element for each
    for (const meal of Object.values(data)) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-meal');
        changeButtonElement.textContent = 'Change';

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-meal');
        deleteButtonElement.textContent = 'Delete';

        const buttonContainerElemenet = document.createElement('div');
        buttonContainerElemenet.id = 'meal-buttons';
        buttonContainerElemenet.appendChild(changeButtonElement);
        buttonContainerElemenet.appendChild(deleteButtonElement);

        const foodH2Element = document.createElement('h2');
        foodH2Element.textContent = meal.food;
        
        const timeH3Element = document.createElement('h3');
        timeH3Element.textContent = meal.time;

        const calorieH3Element = document.createElement('h3');
        calorieH3Element.textContent = meal.calories;

        const mealElement = document.createElement('div');
        mealElement.classList.add('meal');
        mealElement.appendChild(foodH2Element);
        mealElement.appendChild(timeH3Element);
        mealElement.appendChild(calorieH3Element);
        mealElement.appendChild(buttonContainerElemenet);

        //Attach meals to DOM
        mealListElement.appendChild(mealElement);

        //Attach on change
        changeButtonElement.addEventListener('click', async() => {   
            //save current meal id
            currentMeal = meal._id;
            
            //populate inputs
            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value = meal.calories;

            //active edit button
            editButtonElement.removeAttribute('disabled');

            //deactive add button
            addButtonElement.setAttribute('disabled', 'disabled');

            //remove from list
            mealElement.remove();

        })

        //Attach on delete
        deleteButtonElement.addEventListener('click', async() => {
            //delete http request
            const response = await fetch(`${baseUrl}/${meal._id}`,{
                method: 'DELETE'
            });
            //remove from list
            mealElement.remove();
        })

    }

}

loadButtonElement.addEventListener('click',  loadMeals )

editButtonElement.addEventListener('click', async() => {
    //get data from inputs
    const {food,calories,time} = getInputData();

    //make a put request
    const response = await fetch(`${baseUrl}/${currentMeal}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: currentMeal,
            food,
            calories,
            time
            
        })
    })

    if(!response.ok) {
        return;
    }

    //load meals
    loadMeals();

    //deactivete edit button
        editButtonElement.setAttribute('disabled','disabled');
    //active addbutton
    addButtonElement.removeAttribute('disabled');

    //clear currentMeal
    currentMeal = null;

})

addButtonElement.addEventListener('click', async() => {
    //get input data
    const newMeal = getInputData();

    //create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers:{ 
            'content-type': 'application/json',
        },
        body:JSON.stringify(newMeal),
    });
    if (!response.ok) {
        return;
    }
    //clear inputs
    clearInputData();

    //load all meals
    await loadMeals();
    
})  
function getInputData() {
    const food = foodInputElement.value;
    const time = timeInputElement.value ;
    const calories = caloriesInputElement.value ;

    return { food,time,calories}
}
function clearInputData() {
    foodInputElement.value ='';
    timeInputElement.value ='';
    caloriesInputElement.value ='';
}
