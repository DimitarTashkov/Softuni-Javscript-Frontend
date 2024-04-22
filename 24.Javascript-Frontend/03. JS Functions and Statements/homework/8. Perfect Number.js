function solve(number) {
    const dividers = getDivisors(number);

    const sum = dividers.reduce((a,b) => a+b,0);

    if(sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
solve(6);
function getDivisors(number) {
    const dividers = [];

    for(let i = number-1; i > 0, i--;) {
        if(number % i === 0) {
            dividers.push(i);
        }
    }

    return dividers;
}