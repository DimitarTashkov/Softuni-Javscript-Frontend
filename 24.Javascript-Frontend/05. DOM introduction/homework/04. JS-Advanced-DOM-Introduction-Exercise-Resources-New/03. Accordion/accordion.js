function toggle() {
    const textInputElement = document.getElementById('extra');
    const moreButtonElement = document.querySelector('.head span.button ');

    const currentButtonText = moreButtonElement.textContent;
    if(currentButtonText === 'More'){
        textInputElement.style.display = 'block';
        moreButtonElement.textContent = 'Less';
    } else {
        textInputElement.style.display = 'none';
        moreButtonElement.textContent = 'More';
    }
}