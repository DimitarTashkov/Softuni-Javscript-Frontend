function solve(product,quantity) {
    let productPrice = getProductPrice(product);
    return (productPrice * quantity).toFixed(2);
}
function getProductPrice(product) {

    switch(product) {
        case 'coffee':
            return 1.5;
        case 'water':
            return 1;
        case 'coke':
            return 1.4;
        case 'snacks':
            return 2;
    }
}
console.log(solve("water",5));