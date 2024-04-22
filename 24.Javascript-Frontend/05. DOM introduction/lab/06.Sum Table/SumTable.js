function sumTable() {
    const tdCostElements = document.querySelectorAll('tr td:last-child:not(#sum)')
    const itemToSum = document.getElementById('sum');

   const sum = Array.from(tdCostElements)
    .reduce((sum,element) => sum + Number(element.textContent),0);

    itemToSum.textContent = sum;
}