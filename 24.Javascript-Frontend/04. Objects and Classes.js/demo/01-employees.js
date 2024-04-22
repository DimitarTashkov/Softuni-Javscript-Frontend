function empl (input) {
    let newObj = {};
    for (let i = 0; i < input.length; i++) {
        let num = input[i].length;
        console.log(`Name: ${input[i]} -- Personal Number: ${num}`);
    }
}