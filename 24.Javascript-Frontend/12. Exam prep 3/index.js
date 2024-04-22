function solve(input) {
    const astronautsCount = Number(input.shift());

    const astrounauts = {};
    for (let i = 0; i < astronautsCount; i++) {
        const [name, oxygen, energy] = input.shift().split(' ');
        astrounauts[name] = {
             oxygen
            ,energy
        };       
    } 
    let commandInput = input.shift();
    while(commandInput !== 'End') {
        const [commandName,astrounautName,value] =  commandInput.split(' - ');
        const astrounant = astrounauts[astrounautName];
        let oxygen = Number(astrounant.oxygen);
        let energy = Number(astrounant.energy);
        switch(commandName) {
            case 'Explore':
            if (energy > Number(value)) {
                energy -= Number(value);
                astrounant.energy = energy;

                console.log(`${astrounautName} has successfully explored a new area and now has ${astrounant.energy} energy!`);
            } else {
                console.log(`${astrounautName} does not have enough energy to explore!`);

            }
            break;
            case 'Refuel': 
            let refilled = 200-astrounant.energy;
                if(energy + Number(value) > 200) {
                    astrounant.energy = 200;
                } else {
                    energy += Number(value);
                    astrounant.energy = energy;
                    refilled = value;
                }
                console.log(`${astrounautName} refueled their energy by ${refilled}!`);
            break;
            case 'Breathe':
                let replenished = 100-oxygen;
                if(oxygen + Number(value) > 100) {
                    astrounant.oxygen = 100;
                } else {
                    oxygen += Number(value);
                    astrounant.oxygen = oxygen;
                    replenished = value;
                }
                console.log(`${astrounautName} took a breath and recovered ${replenished} oxygen!`);
            break;
        }

        commandInput = input.shift();
    }
    for (const key in astrounauts) {
        console.log(`Astronaut: ${key}, Oxygen: ${astrounauts[key].oxygen}, Energy: ${astrounauts[key].energy}`);
    }      
    
}
solve([    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End']

)