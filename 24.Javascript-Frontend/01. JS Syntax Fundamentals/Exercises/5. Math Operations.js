function solver(firstNumber,secondNumber,operand){
    let result;
    switch(operand){
        case '+': result = firstNumber+secondNumber;break;
        case '-': result = firstNumber-secondNumber;break;
        case '/': result = firstNumber/secondNumber;break;
        case '*': result = firstNumber*secondNumber;break;
        case '%': result = firstNumber%secondNumber;break;
        case '**':result = firstNumber**secondNumber;break; 
    }
    console.log(result);
}
solver(5,6,'+')