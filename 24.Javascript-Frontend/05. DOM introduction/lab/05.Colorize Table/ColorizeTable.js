function colorize() {
    // TODO
    let evenRowElements = document.querySelectorAll('table tr');
    let index = 0;
    for (let row of evenRowElements) {
        index++;

        if (index % 2 == 0) {
            row.style.background = 'teal';
        }
    }
}