function login(arguments){
    const user = arguments.shift();
   const pass = getPassword(user);
    let counter = 0;
    for(let i = 0; i < arguments.length; i++){
      
         if (arguments[i] === pass){
            console.log(`User ${user} logged in.`);
        }
        else{ 
            counter++;
            if(counter === 4){
                console.log(`User ${user} blocked!`);
                return;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);

function getPassword(user){
    let pass = '';
    for (let i = user.length-1; i >= 0;i-- ){
        pass+=user[i];
    }
    return pass;
}