
//Declare Variables

let a = 10;
let b = 20;

console.log(a+b);

if (b > a){
    console.log(b);
} else if (a > b){
    console.log(a)
}

//Function Declaration
function add(a,b){
    console.log(a+b);
}

//Fucntion invokation
add(1,2);

//Console Print
console.log('The number a is:' +' '+ a + '!')

//Concatenation

//string interpolation
console.log(`The number a is: ${a}`);

const pi = 3.14;
//Fix formatting
console.log(pi.toFixed(1));
