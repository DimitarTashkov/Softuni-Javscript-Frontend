function solve(arr){
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    let evenNumbers = arr.filter(num => num % 2 === 0);
    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < oddNumbers.length; index++) {
        
        oddSum += oddNumbers[index]
    }
    for (let index = 0; index < evenNumbers.length; index++) {
        
        evenSum += evenNumbers[index]
    }
    console.log(evenSum-oddSum);
}
solve([1,2,3,4,5,6])