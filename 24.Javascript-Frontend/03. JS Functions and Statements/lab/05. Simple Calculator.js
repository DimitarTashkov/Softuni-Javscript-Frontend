function calculator(a,b,operator) {
    function solve(operator) {
        switch (operator) {
            case 'multiply':
               return  (a,b) => a*b;
            case 'divide':
                return  (a,b) => a/b;
            case 'add':
               return  (a,b) => a+b;
            case 'substract':
               return  (a,b) => a-b;
        }
    }
    const operation = solve(operator);
    const result = operation(a,b);
    console.log(result);
}
calculator(5,5,'multiply');