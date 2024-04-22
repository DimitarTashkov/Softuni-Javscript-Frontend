function solve(word,text){
    const words = text.toLowerCase().split(' ');
    const isIncluded = words.includes(word.toLowerCase());

    if(isIncluded){
        return word;
    }
    return `${word} not found!`;
}
console.log(solve('javascript','JavaScript is the bestprogramming language'));
console.log(solve('python','JavaScript is the bestprogramming language'));