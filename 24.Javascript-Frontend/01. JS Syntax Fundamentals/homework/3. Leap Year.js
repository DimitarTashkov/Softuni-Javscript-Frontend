function solveYear(year){
    if(year % 4 === 0 || year % 400 === 0 && year % 100 !== 0){
        return console.log('yes');       
    } 
    console.log('no');   
}
solveYear(1984);
solveYear(2003);
solveYear(4);