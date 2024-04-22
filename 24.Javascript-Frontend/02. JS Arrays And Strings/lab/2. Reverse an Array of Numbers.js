function reverse(n,numbers){
    let firstNumbers = numbers
    .slice(0,n)
    .reverse()
    .join(' ');

    console.log(firstNumbers);

}
reverse(3, [10, 20, 30, 40, 50]);