function solve(input) {
    const towns = [];

    for (const row of input) {
        const [townName,latitude,longitude] = row.split(' | ')

        const addTown = {
            town: townName
            ,latitude: Number(latitude).toFixed(2)
            ,longitude : Number(longitude).toFixed(2)
            ,
        }
        towns.push(addTown);
    }
    towns.forEach(town => console.log(town));
}
function fancySolve(input) {
    input
    .map(row => row.split(' | '))
    .map(([town,latitude,longitude]) => ({
        name: town
        ,latitude: Number(latitude).toFixed(2)
        ,longitude : Number(longitude).toFixed(2)
        ,
    }))
    .forEach(town => console.log(town));
}
solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);