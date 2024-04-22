function solve(jsonText) {
    const person = JSON.parse(jsonText);
    Object.keys(person).forEach(key => console.log(`${key}: ${person[key]}`));
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');