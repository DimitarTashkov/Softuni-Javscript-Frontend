function solve(array,step){
    let result = [];
    for(let i = 0;i< array.length;i+=step){
        result.push(array[i]);
    }
    return result;
}
function quickSolution(array,step){
    const result = array.filter((index) => index % step === 0)
    return result;
}
console.log(solve(['5','20','31','4','20'],2));
console.log(quickSolution(['5','20','31','4','20'],2));