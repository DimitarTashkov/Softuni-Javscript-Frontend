function solve(password) {
    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = password => /^[a-zA-Z-0-9]+$/.test(password);
    const has2Digits = password => password
    .split('').filter(c => Number.isInteger(Number(c)))
    .length >= 2;

    let isValid = true; 

    if(!isValidLength(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    if(!isAlphaNumerical(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
    if(!has2Digits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if(isValid) {
        console.log("Password is valid");
    }
}


solve('MyPass123');
solve('Login');