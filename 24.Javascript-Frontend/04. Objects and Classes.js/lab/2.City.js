function solve(city) {
    Object.keys(city).forEach(prop => console.log(`${prop} -> ${city[prop]}`));
}
solve({

    name: "Sofia",
    
    area: 492,
    
    population: 1238438,
    
    country: "Bulgaria",
postCode: "1000"});