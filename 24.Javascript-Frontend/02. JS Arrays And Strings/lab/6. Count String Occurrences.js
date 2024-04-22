function occurencies(text,searched){
    let words = text.split(' ');
    let counter = 0;
    for (let word of words) {
        if(word === searched){
            counter++;
        }
    }
    console.log(counter);
}