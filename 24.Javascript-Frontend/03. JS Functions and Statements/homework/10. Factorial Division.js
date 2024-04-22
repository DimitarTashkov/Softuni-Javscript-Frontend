function solve(factorial,divider) {
    const result = getFactorial(factorial)/getFactorial(divider);
    console.log(result.toFixed(2));
}
function getFactorial(factorial) {
    if(factorial === 1) {
        return 1;
    }

    return factorial * getFactorial(factorial-1);
}
solve(5,2);