function solve(numbers,rotations){
   let firstNumber = numbers[0]
   let rotatedNumbers = [];
   for(let j = 0;j< rotations;j++){
    for (let i = 1;1< numbers.length;i++){
        rotatedNumbers[i-1] = numbers[i];
    }
    rotatedNumbers[rotatedNumbers.length] = firstNumber;  
    numbers = rotatedNumbers;
   }
   console.log(numbers.join(' '));
}

solve([51, 47, 32, 61, 21], 2);