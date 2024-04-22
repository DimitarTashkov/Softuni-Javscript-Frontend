function generateReport() {
    //TODO
    const thElements = document.querySelectorAll('table th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

   const activeColumns =  Array
    .from(thElements)
    .map(thElement => {
        const checkboxElement = thElement.querySelector('input[type=checkbox]')
        return {
            columnName: thElement.textContent.toLowerCase().trim()
            ,active: checkboxElement.checked
        }
    })
    const reportData = Array.from(trElements)
    .map(trElement => {
        const tdElements = trElement.querySelectorAll('td');

      const result =  Array
        .from(tdElements)
        .reduce((data,tdElement,i) => {
           if(!activeColumns[i].active) {
            return data;
           }
           const columnName = activeColumns[i].columnName;
           data[columnName] = tdElement.textContent;

           return data;
        },{})

        return result;
    })
    outputElement.value = JSON.stringify(reportData,null,2);

}