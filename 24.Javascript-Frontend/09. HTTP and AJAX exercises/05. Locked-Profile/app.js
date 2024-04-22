function lockedProfile() {
    const profilesUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainElement = document.getElementById('main');
    mainElement.innerHTML = '';
    let personCount = 0;

    const response = fetch(profilesUrl)
    .then(res => res.json())
    .then(data => Object.values(data)
    .forEach(person => mainElement.appendChild(createPerson(person,personCount++))));

    
}
function createPerson(person,personCount) {
    const {username,email,age} = person;

    //User data created backwards from the original html structure 
    const showMoreButton = document.createElement('button');
    showMoreButton.textContent = 'Show more';

    const ageInputElement = document.createElement('input');
    ageInputElement.setAttribute('type', 'email');
    ageInputElement.setAttribute('name',`user${personCount}Age`)
    ageInputElement.setAttribute('disabled','disabled')
    ageInputElement.setAttribute('readonly','readonly')
    ageInputElement.value = age;

    const ageLabelElement = document.createElement('label');
    ageLabelElement.textContent = 'Age';

    const emailInputElement = document.createElement('input');
    emailInputElement.setAttribute('type', 'email');
    emailInputElement.setAttribute('name',`user${personCount}Email`)
    emailInputElement.setAttribute('disabled','disabled')
    emailInputElement.setAttribute('readonly','readonly')
    emailInputElement.value = email;

    const emailLabelElement = document.createElement('label');
    emailLabelElement.textContent = 'Email';

    const dataHorizontalLineElement = document.createElement('hr');

    const userDataContainer = document.createElement('div');
    userDataContainer.style.display = 'none';
    userDataContainer.classList.add(`user${personCount}Username`)
    //append info to first div
    userDataContainer.appendChild(dataHorizontalLineElement);
    userDataContainer.appendChild(emailLabelElement);
    userDataContainer.appendChild(emailInputElement);
    userDataContainer.appendChild(ageLabelElement);
    userDataContainer.appendChild(ageInputElement);

    //add states to our profiles
    const usernameInputElement = document.createElement('input');
    usernameInputElement.setAttribute('type', 'text');
    usernameInputElement.setAttribute('name',`user${personCount}Username`)
    usernameInputElement.setAttribute('disabled','disabled')
    usernameInputElement.setAttribute('readonly','readonly')
    usernameInputElement.value = username;

    const usernameLabelElement = document.createElement('label');
    usernameLabelElement.textContent = 'Username';

    const statesHorizontalLineElement = document.createElement('hr');
    const brElement = document.createElement('br');

    const unlockInputElement = document.createElement('input');
    unlockInputElement.setAttribute('type', 'radio');
    unlockInputElement.setAttribute('name',`user${personCount}Locked`)
    unlockInputElement.value = 'unlock';

    const unlockLabelElement = document.createElement('label');
    unlockLabelElement.textContent = 'Unlock';

    const lockInputElement = document.createElement('input');
    lockInputElement.setAttribute('type', 'radio');
    lockInputElement.setAttribute('name',`user${personCount}Locked`)
    lockInputElement.setAttribute('checked',`checked`)
    lockInputElement.value = 'lock';

    const lockLabelElement = document.createElement('label');
    lockLabelElement.textContent = 'Lock';

    const profileIconElement = document.createElement('img');
    profileIconElement.src = './iconProfile2.png';
    profileIconElement.classList.add('userIcon');

    //Main container for profile information
    const profileContainerElement = document.createElement('div');
    profileContainerElement.classList.add('profile');

    //Check show more button status
    showMoreButton.addEventListener('click', () => {
        if(unlockInputElement.checked && showMoreButton.textContent === 'Hide it') {
            userDataContainer.style.display = 'none';
            showMoreButton.textContent = 'Show more';
        } else if(unlockInputElement.checked) {
            userDataContainer.style.display = 'block';
            showMoreButton.textContent = 'Hide it';
        } 
    })

    
    //Append all consecutive items backwards due to our reverse tree html structure implementation
    profileContainerElement.appendChild(profileIconElement)
    profileContainerElement.appendChild(lockLabelElement)
    profileContainerElement.appendChild(lockInputElement)
    profileContainerElement.appendChild(unlockLabelElement)
    profileContainerElement.appendChild(unlockInputElement)
    profileContainerElement.appendChild(brElement)
    profileContainerElement.appendChild(statesHorizontalLineElement)
    profileContainerElement.appendChild(usernameLabelElement)
    profileContainerElement.appendChild(usernameInputElement)
    profileContainerElement.appendChild(userDataContainer)
    profileContainerElement.appendChild(showMoreButton)

    return profileContainerElement;
}