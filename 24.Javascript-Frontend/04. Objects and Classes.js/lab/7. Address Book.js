function solve(text) {
    const pairs = {};
    for(const line of text) {
        const [name, address] = line.split(':');
        pairs[name] = address;
    }
    let sorted = Object.entries(pairs);
    sorted.sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(([name,address]) => console.log(`${name} -> ${address}`));

}
solve(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);