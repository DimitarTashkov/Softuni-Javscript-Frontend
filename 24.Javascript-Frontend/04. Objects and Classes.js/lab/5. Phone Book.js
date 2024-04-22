function solve(input) {
    const phoneBook = {};

    for(const line of input) {
        const [name,phone] = line.split(' ');

        phoneBook[name] = phone;
    }

    for(const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}