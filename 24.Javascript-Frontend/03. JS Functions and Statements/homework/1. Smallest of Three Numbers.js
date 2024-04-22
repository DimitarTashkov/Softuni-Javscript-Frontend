function solve(a,b,c) {
    const result = mathMin([a,b,c]);
    console.log(result);
}
function mathMin(numbers){
    let min = Number.MAX_SAFE_INTEGER;

    for (const number of numbers) {
        if(min > number ){
            min = number;
        }
    }
    return min;
}
solve(2,5,3);