function solve(input) {
    const words = input.split(' ');
    const result = {};
    for(const word of words) {
        if (!result.hasOwnProperty(word.toLowerCase())) {
            result[word.toLowerCase()] = 0;
        }

        result[word.toLowerCase()]++;
    }
    const output = [];
    for(const word in result) {
        if (result[word] % 2 !== 0) {
            output.push(word);
        }
    }
    console.log(output.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');