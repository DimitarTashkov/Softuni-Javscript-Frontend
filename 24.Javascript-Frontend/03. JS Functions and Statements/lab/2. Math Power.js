function solve(number,power){
    //console.log(number ** power);
    let result = 1;
    for(let i = 0; i < power;i++){
        result *= number;
    }
    console.log(result);
}
solve(2,8)