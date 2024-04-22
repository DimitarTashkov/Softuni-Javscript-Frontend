function solve(firstCharacter,secondCharacter) {
    const [start,end] = getSortedCharacters(firstCharacter,secondCharacter);

    const result = getCharacterBetweenStartAndEnd(start,end);

    console.log(result.join(' '));

}

function getCharacterBetweenStartAndEnd(start,end) {
    let characters = [];
    for(let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0);i++) {
        characters.push(String.fromCharCode(i));
    }
    return characters;
}
function getSortedCharacters(a,b) {
    const characters = [a,b];

    characters.sort();
    
    return characters;
}
