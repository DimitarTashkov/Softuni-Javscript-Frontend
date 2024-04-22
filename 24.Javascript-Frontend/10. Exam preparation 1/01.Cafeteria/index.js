
function solve(input) {
    const baristaCount = Number(input.shift());
    const team = {};

    //Prepare team
    for (let i = 0; i < baristaCount; i++) {
        const [name,shift,coffeeTypes] = input[i].split(' ');  
        
        team[name] = {
            shift
            ,coffeeTypes : coffeeTypes.split(',')
        }
    }

    //Execute commands
    let commandLine = input.shift();
    
    while (commandLine != 'Closed') {
        const [command, name, firstArg, secondArg] = commandLine.split(' / ');

        const barista = team[name];
        let shift, coffeType;
        switch (command) {
            case 'Prepare':
                shift = firstArg;
                coffeType = secondArg;
                if (barista.shift === shift && barista.coffeeTypes.includes(coffeType)) {
                    console.log(`${name} has prepared a ${secondArg} for you!`);
                } else {
                    console.log(`${name} is not available to prepare a ${secondArg}.`);
                }
                break;
        
            case 'Change Shift':
                shift = firstArg;
                barista.shift = shift;
                console.log(`${name} has updated his shift to: ${shift}`);
                break;
            case 'Learn':
                coffeType = firstArg
                if (barista.coffeeTypes.includes(coffeType)) {
                    console.log(`${name} knows how to make ${coffeType}.`);
                } else {
                    barista.coffeeTypes.push(coffeType);
                    console.log(`${name} has learned a new coffee type: ${coffeType}.`);
                }
                break;
        }

        commandLine = input.shift();
    }
    for (const baristaName in team) {
        
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`);       
    }
}