function create(words) {
   const appendOutputElement = document.getElementById('content')
   for (const word of words) {
      const divSection = document.createElement('div');
      const paragraphElement = document.createElement('p');

      paragraphElement.style.display = 'none';
      paragraphElement.textContent = word;
      divSection.appendChild(paragraphElement);

      divSection.addEventListener('click', (event) => {
         paragraphElement.style.display = 'block';
      })

      appendOutputElement.appendChild(divSection);

   }
}