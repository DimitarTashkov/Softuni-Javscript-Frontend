function solve (firstName,lastName,hairColor) {
    const person = {
        name: firstName,
        lastName
        ,hairColor
    };
    const jsonData = JSON.stringify(person);
    console.log(jsonData);
}
solve('George', 'Jones','Brown');