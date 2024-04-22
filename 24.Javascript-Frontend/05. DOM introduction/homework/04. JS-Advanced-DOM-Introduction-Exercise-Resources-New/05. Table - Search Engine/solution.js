function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      const trElements = document.querySelectorAll('.container tbody tr')
      const searchInputElement = document.getElementById('searchField'); 
      const searchText = searchInputElement.value;

      //Clear old data
      searchInputElement.value = '';


      for (const trElement of trElements) {
         const tdElements = trElement.querySelectorAll('td');
         let isSelected = false;

         trElement.classList.remove('select')

         for (const tdElement of tdElements) {
            if (tdElement.textContent.includes(searchText)) {
               isSelected = true;
               break;
            }
         }
         if (isSelected) {
            trElement.classList.add('select');
         }
      }
   }
}