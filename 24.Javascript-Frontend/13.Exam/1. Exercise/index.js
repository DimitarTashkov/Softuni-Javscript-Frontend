function solve(input) {
    const heroesAmount = input.shift();
    const heroes = {};
    for (let i = 0; i < heroesAmount; i++) {
        const [name, hp, bullets] = input.shift().split(' ');
        heroes[name] = {
            hp
            ,bullets
        }
    }

    let commandArguments = input.shift();
    while(commandArguments !== 'Ride Off Into Sunset') {
        const commandInfo = commandArguments.split(' - ');
        const command = commandInfo[0];
        const heroName = commandInfo[1];
        const hero = heroes[heroName]

        switch(command) {
            case 'FireShot':
            const target = commandInfo[2];
            if(Number(hero.bullets) > 0) {
                hero.bullets--;
                console.log(`${heroName} has successfully hit ${target} and now has ${hero.bullets} bullets!`);
            } else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
            }
                break
            case 'TakeHit':
            const damage = Number(commandInfo[2]);
            const attacker = commandInfo[3];
            hero.hp -= damage;
            const heroHpValue = Number(hero.hp);
            if(heroHpValue > 0) {
                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${hero.hp} HP!`);
            } else {
                console.log(`${heroName} was gunned down by ${attacker}!`);
                delete heroes[heroName];
            }
                break;
            case 'Reload':
                const bullets = Number(hero.bullets);
                if(bullets < 6) {
                    const amountToReload = 6-bullets;
                    hero.bullets = 6;
                    
                    console.log(`${heroName} reloaded ${amountToReload} bullets!`);
                } else {
                    console.log(`${heroName}'s pistol is fully loaded!`);
                }
                break;
            case 'PatchUp':
                const amount = Number(commandInfo[2]);
                const heroHp = Number(hero.hp);
                if(heroHp === 100) {
                    console.log(`${heroName} is in full health!`);
                } else {
                    let amountPatched = 0;
                    if(heroHp + amount > 100) {
                        amountPatched = 100-heroHp;
                        hero.hp = 100;
                    } else {
                        hero.hp += Number(amount);
                        amountPatched = amount;
                    }
                    console.log(`${heroName} patched up and recovered ${amountPatched} HP!`);
                }
                break;
        }
        commandArguments = input.shift();
    }
    for (const key in heroes) {
        if(heroes[key].hp > 0) {
            console.log(key);
            console.log(` HP: ${heroes[key].hp}`);
            console.log(` Bullets: ${heroes[key].bullets}`);
        } 
    }
}
solve(["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"])


