function solve(number) {
    const evenSum = calculateDigitsSum(number, x => x % 2 === 0)
    const oddSum = calculateDigitsSum(number, x => x % 2 !== 0)

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

function calculateDigitsSum(number, filter) {
    const digits = number
    .toString()
    .split('')
    .map(digit => Number(digit))
    .filter(filter);

    const sum = digits.reduce((acc,digit) => acc+digit,0);

    return sum;
}
solve(1000435);