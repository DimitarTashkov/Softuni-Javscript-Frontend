function solve(numbers) {
    numbers.forEach(printPalindromeNumber);
    
}
function printPalindromeNumber(number) {
    console.log(isPalindrome(number));
}
function isPalindrome(number) {
    const forwardNumber = number.toString();
    const backwardNumber = forwardNumber.split('').reverse().join('');

    return forwardNumber === backwardNumber;
}
solve([123,323,421,121]);